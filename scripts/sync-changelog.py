#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sync-changelog.py — YYRMM 的软件库「更新记录」一键同步脚本（GitHub 源）
============================================================
功能：
  1) 从 GitHub Releases API 拉取各软件仓库的发布版本（无 Release 时回退 Tags）
  2) 解析 Release 正文（body）中的更新条目；正文缺失的版本用手动维护源兜底
  3) 合并 scripts/changelog-source.json 手动维护源（中英双语、正文缺失项目）
  4) 每个软件保留【最近 3 个版本】的更新记录
  5) 生成 assets/js/changelog.js 供详情页渲染（请勿手改该文件）

用法：
  python scripts/sync-changelog.py
  （依赖网络访问 api.github.com；Rate Limit 未认证 60 次/小时，本脚本每次约 12 次请求）

手动维护：
  - 需要中英双语 / 给某版本补充内容的项目
    编辑 scripts/changelog-source.json 按 { key: [ {version, tagline, items} ] } 补充，
    脚本会优先采用手动源的中文内容与英文翻译（可覆盖 Release 正文）。
  - 所有版本的"编号列表"一律来自 GitHub（Releases + Tags 合并去重），
    不在 GitHub 上的版本不会展示。
"""

import json
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JS = ROOT / "assets" / "js" / "changelog.js"
MANUAL_SRC = Path(__file__).resolve().parent / "changelog-source.json"

# 每个软件保留的最新版本数量
MAX_VERSIONS = 3

# ---------------------------------------------------------------
# GitHub 来源（key 必须与 main.js softwareList 的 key 一致）
# ---------------------------------------------------------------
GITHUB_SOURCES = {
    "love101":   {"repo": "YYRMMAYO/love101",    "desc": "第101种理由"},
    "aistudio":  {"repo": "YYRMMAYO/AIStudioHub", "desc": "AIStudioHub"},
    "obs":       {"repo": "YYRMMAYO/OBS_Helper",  "desc": "OBS 排障助手 (Windows)"},
    "obs-plugin": {"repo": "YYRMMAYO/OBS_Helper_Plugin", "desc": "OBS 排障助手 · 插件版"},
    "obs-mac":   {"repo": "YYRMMAYO/OBS-Helpmac", "desc": "OBS 排障助手 (macOS)"},
    "sinan":     {"repo": "YYRMMAYO/WINhelper",   "desc": "司南工具箱"},
}

# Release 正文中这些小节标题会被跳过（下载说明 / 构建验证等噪音）
SKIP_HEADINGS = (
    "下载", "安装", "镜像", "提取码", "验证", "编译",
    "渠道", "联系方式", "问题反馈", "常见问题", "更新方式", "如何更新",
    "赞助", "支持", "Debug", "Release 资产",
    "多轮排查", "自检", "单元测试", "构建", "资产", "清单", "验证结果",
)

# 资产/流程类条目前缀或关键词，直接丢弃（安装包、哈希、打包说明等）
ASSET_PREFIXES = (
    "安装包", "便携包", "增量包", "完整清单", "文件清单", "清单",
    "绿色版", "增量补丁", "下载", "提取码", "应用内「设置", "由 OBS 排障助手构建脚本",
    "---", "License", "MIT License", "版权", "由构建脚本",
)
ASSET_KEYWORDS = ("SHA-256",)

# 每个版本最多展示的条目数 / 单条最大长度（克制原则，避免页面过长）
MAX_ITEMS = 8
MAX_ITEM_LEN = 120


# ---------------------------------------------------------------
# GitHub API
# ---------------------------------------------------------------
def gh_api(url: str):
    """调用 GitHub REST API，返回解析后的 JSON。"""
    req = urllib.request.Request(url, headers={"User-Agent": "yyrmm-web"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_github_versions(key: str, repo: str) -> dict:
    """拉取 Releases + Tags，合并去重。

    返回 { 规范化版本号: {"source": "release"|"tag", "tag": 原始 tag,
                           "name": release 名称, "body": release 正文, "date": 发布日期} }
    """
    merged = {}
    try:
        for r in gh_api(f"https://api.github.com/repos/{repo}/releases?per_page=10"):
            nv = norm_version(r.get("tag_name", ""))
            merged[nv] = {
                "source": "release",
                "tag": r.get("tag_name", ""),
                "name": r.get("name") or "",
                "body": r.get("body") or "",
                "date": r.get("published_at") or "",
            }
    except Exception as e:
        print(f"  [警告] Releases 拉取失败：{e}")
    try:
        for t in gh_api(f"https://api.github.com/repos/{repo}/tags?per_page=10"):
            nv = norm_version(t.get("name", ""))
            if nv and nv not in merged:  # 仅补充 Release 没有的版本
                merged[nv] = {
                    "source": "tag",
                    "tag": t.get("name", ""),
                    "name": "",
                    "body": "",
                    "date": "",
                }
    except Exception as e:
        print(f"  [警告] Tags 拉取失败：{e}")
    return merged


def norm_version(tag: str) -> str:
    """把任意 tag 规范化为 vX.Y.Z：V2.3.0 -> v2.3.0，1.5.0 -> v1.5.0。"""
    m = re.search(r"(\d+(?:\.\d+){0,2})", tag or "")
    return "v" + m.group(1) if m else (tag or "").strip()


def version_key(v: str):
    nums = re.findall(r"\d+", v)
    return [int(x) for x in nums[:3]] or [0, 0, 0]


# ---------------------------------------------------------------
# Release 正文解析
# ---------------------------------------------------------------
def clean_md(text: str) -> str:
    """去除 markdown 加粗/斜体星号，保留其余内容。"""
    return re.sub(r"\*+", "", text or "").strip()


def parse_release_body(body: str) -> list:
    """从 Release 正文提取更新条目（- 开头的列表项，跳过下载/验证类小节与资产噪音）。"""
    if not body:
        return []
    items = []
    skip = False
    for raw in body.splitlines():
        s = raw.strip()
        if not s:
            continue
        if s.startswith("#"):
            skip = any(k in s for k in SKIP_HEADINGS)
            continue
        if skip:
            # 跳过小节内所有行（含序号行）
            continue
        if s.startswith("---") or s.startswith("***") or s.startswith("___"):
            continue
        if re.match(r"^\d+[.)]\s", s):
            # 纯序号行（如"1. xxx"过程说明）不作为条目也不合并
            continue
        if s.startswith("- ") or s.startswith("* "):
            items.append(re.sub(r"^[-*]\s+", "", s))
        elif s.startswith("-") and not s.startswith("--"):
            items.append(s[1:].strip())
        elif items and not s.startswith("```"):
            # 续行：合并进当前条目
            items[-1] += " " + s

    # 清理：资产过滤 + 长度截断 + 数量上限
    cleaned = []
    for it in items:
        it = clean_md(it)
        if not it:
            continue
        if any(it.startswith(p) for p in ASSET_PREFIXES):
            continue
        if any(k in it for k in ASSET_KEYWORDS):
            continue
        if len(it) > MAX_ITEM_LEN:
            it = it[:MAX_ITEM_LEN].rstrip() + "…"
        cleaned.append(it)
    return cleaned[:MAX_ITEMS]


def tagline_from_name(name: str) -> str:
    """从 Release 名称提取一句话描述（取最后一个分隔符之后的部分）。"""
    if not name:
        return ""
    for sep in ("——", "—", "–", "-"):
        if sep in name:
            return name.split(sep, 1)[1].strip()
    return ""


# ---------------------------------------------------------------
# 读取现有 changelog.js 中已有的英文翻译（保留人工翻译）
# ---------------------------------------------------------------
def load_existing_en() -> dict:
    """返回 { key: { version: {"tagline": {"en": ...}, "items": [{"en": ...}]} } }"""
    if not OUT_JS.exists():
        return {}
    text = OUT_JS.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"const\s+CHANGELOG\s*=\s*(\{.*?\});?\s*$", text, re.S)
    if not m:
        return {}
    try:
        data = json.loads(m.group(1))
    except Exception:
        return {}
    result = {}
    for key, entries in data.items():
        for e in entries:
            if "en" in str(e.get("tagline", {})) or any(
                isinstance(i, dict) and "en" in i for i in e.get("items", [])
            ):
                result.setdefault(key, {})[e["version"]] = {
                    "tagline": e.get("tagline", {}),
                    "items": e.get("items", []),
                }
    return result


# ---------------------------------------------------------------
# 合并：GitHub + 手动源 + 已有英文翻译
# ---------------------------------------------------------------
def merge_entry(gh: dict | None, manual: dict | None, existing: dict | None) -> dict:
    """合并出一个条目：{version, tagline: {zh,en}, items: [{zh,en}...]}"""
    # 中文：手动源优先（可覆盖 GitHub 正文），否则解析 Release 正文
    zh_tagline = ""
    zh_items = []
    if manual and manual.get("tagline", {}).get("zh"):
        zh_tagline = manual["tagline"]["zh"]
    elif gh:
        zh_tagline = tagline_from_name(gh.get("name", ""))
    if manual and manual.get("items"):
        zh_items = [i["zh"] for i in manual["items"] if i.get("zh")]
    elif gh:
        zh_items = parse_release_body(gh.get("body", ""))

    en_tagline = ""
    en_items = []
    if manual and manual.get("tagline", {}).get("en"):
        en_tagline = manual["tagline"]["en"]
    elif existing and existing.get("tagline", {}).get("en"):
        en_tagline = existing["tagline"]["en"]
    if manual and any(i.get("en") for i in manual.get("items", [])):
        en_items = [i.get("en", "") for i in manual["items"]]
    elif existing and any(i.get("en") for i in existing.get("items", [])):
        en_items = [i.get("en", "") for i in existing["items"]]

    # 对齐 items 数量：不足补空，多出截断
    n = max(len(zh_items), len(en_items))
    zh_items = (zh_items + [""] * n)[:n]
    en_items = (en_items + [""] * n)[:n]

    return {
        "tagline": {"zh": zh_tagline, "en": en_tagline},
        "items": [{"zh": z, "en": e} for z, e in zip(zh_items, en_items)],
    }


def main():
    print("=" * 62)
    print("YYRMM 的软件库 — 更新记录一键同步（GitHub Releases / Tags）")
    print("=" * 62)

    # 1) 从 GitHub 拉取各仓库版本
    gh_data: dict[str, dict] = {}
    print("\n[1/4] 拉取 GitHub Releases + Tags：")
    for key, cfg in GITHUB_SOURCES.items():
        print(f"  · {cfg['desc']} ({cfg['repo']})")
        gh_data[key] = fetch_github_versions(key, cfg["repo"])
        srcs = [v["source"] for v in gh_data[key].values()]
        print(f"    共 {len(gh_data[key])} 个版本（Release {srcs.count('release')} / Tag {srcs.count('tag')}）")

    # 2) 手动维护源
    manual_raw: dict[str, list] = {}
    if MANUAL_SRC.exists():
        manual_raw = json.loads(MANUAL_SRC.read_text(encoding="utf-8"))
        print("\n[2/4] 读取手动维护源 changelog-source.json：")
        for key, entries in manual_raw.items():
            print(f"  · {key}：{len(entries)} 个版本条目")
    else:
        print(f"\n[2/4] 未找到 {MANUAL_SRC.name}，跳过手动源")
    manual_data: dict[str, dict] = {}
    for key, entries in manual_raw.items():
        manual_data[key] = {norm_version(e.get("version", "")): e for e in entries if e.get("version")}

    # 3) 已有英文翻译
    existing_en = load_existing_en()
    print(f"\n[3/4] 保留现有英文翻译：{sum(len(v) for v in existing_en.values())} 条")

    # 4) 合并输出（版本列表一律来自 GitHub）
    output = {}
    print("\n[4/4] 合并并保留最新 3 版：")
    for key in sorted(gh_data):
        merged = {}
        for ver, gh in gh_data[key].items():
            manual_ver = manual_data.get(key, {}).get(ver)
            existing_ver = existing_en.get(key, {}).get(ver)
            merged[ver] = merge_entry(gh, manual_ver, existing_ver)
        # 按版本号降序，保留最新 MAX_VERSIONS 个
        merged = dict(sorted(merged.items(), key=lambda kv: version_key(kv[0]), reverse=True))
        kept = list(merged.items())[:MAX_VERSIONS]
        dropped = len(merged) - len(kept)
        output[key] = [{"version": v, **e} for v, e in kept]
        print(f"  · {key}：保留 {len(kept)} 版：{', '.join(v for v, _ in kept)}"
              + (f"（丢弃 {dropped} 个旧版）" if dropped else ""))

    # 5) 写文件
    gen_time = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M")
    header = (
        "/* ============================================================\n"
        " * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改\n"
        " * 重新生成：python scripts/sync-changelog.py\n"
        " * 数据来源：GitHub Releases / Tags（每个软件最近 3 个版本）\n"
        " * 生成时间：" + gen_time + "\n"
        " * ============================================================ */\n"
    )
    OUT_JS.write_text(
        header + "const CHANGELOG = " + json.dumps(output, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    total = sum(len(v) for v in output.values())
    print(f"\n[OK] 完成：已生成 {OUT_JS.relative_to(ROOT)}（{len(output)} 个软件，共 {total} 条版本记录）")
    print("   手动维护：编辑 scripts/changelog-source.json 后重跑本脚本即可。")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
