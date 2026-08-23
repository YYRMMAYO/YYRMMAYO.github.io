#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sync-changelog.py — YYRMM 的软件库「更新记录」一键同步脚本
============================================================
功能：
  1) 从各软件源码仓库自动解析最新版本的「更新内容」（中文）
  2) 合并 scripts/changelog-source.json 手动维护源（中英双语、无源码项目）
  3) 每个软件保留【最新 3 个版本】的更新记录
  4) 生成 assets/js/changelog.js 供详情页渲染（请勿手改该文件）

用法：
  python scripts/sync-changelog.py
  （Windows 也可双击 scripts/sync-changelog.bat）

手动维护：
  - 无自动解析来源的项目（obs-mac / aistudio / guidecraft / love101）
    编辑 scripts/changelog-source.json 补充 zh/en 条目。
  - 自动解析项目的英文翻译：在 changelog-source.json 中按 key 与 version
    填写 en 字段即可覆盖；不填则回退显示中文。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JS = ROOT / "assets" / "js" / "changelog.js"
MANUAL_SRC = Path(__file__).resolve().parent / "changelog-source.json"

# 每个软件保留的最新版本数量
MAX_VERSIONS = 3

# ---------------------------------------------------------------
# 自动解析来源（key 必须与 main.js softwareList 的 key 一致）
# ---------------------------------------------------------------
AUTO_SOURCES = {
    "sinan": {
        "desc": "司南工具箱（WINHELP README 的 ## vX.Y.Z 更新内容 章节）",
        "type": "winhelp_readme",
        "path": r"F:\new\WINHELP\README.md",
    },
    "obs": {
        "desc": "OBS 排障助手 Windows（NOBS 的 RELEASE_NOTES_v*.md）",
        "type": "obs_release_notes",
        "path": r"F:\OBS\NOBS",
    },
}


# ---------------------------------------------------------------
# 解析器：WINHELP README
#   章节格式：## v6.0.1 更新内容\n\n- **要点**：说明...\n- ...
# ---------------------------------------------------------------
def parse_winhelp_readme(path: str) -> dict:
    p = Path(path)
    if not p.exists():
        print(f"  [跳过] 找不到 {p}")
        return {}
    text = p.read_text(encoding="utf-8-sig", errors="ignore")
    entries = {}
    # 匹配 "## vX.Y.Z 更新内容" 到下一个 "## " 或文件尾
    for m in re.finditer(r"^##\s+(v\d+\.\d+\.\d+)\s+更新内容\s*$", text, re.M):
        ver = m.group(1)
        end = text.find("\n## ", m.end())
        if end == -1:
            end = len(text)
        section = text[m.end():end]
        items = []
        cur = None
        for line in section.splitlines():
            stripped = line.strip()
            # 跳过 markdown 分隔线（---、*** 等）
            if stripped in ("---", "***", "___", "--", "**") or re.fullmatch(r"-{3,}|\*{3,}|_{3,}", stripped):
                continue
            if stripped.startswith("- "):
                if cur:
                    items.append(cur)
                cur = stripped[2:].strip()
            elif stripped.startswith("-") and not stripped.startswith("- "):
                if cur:
                    items.append(cur)
                cur = stripped[1:].strip()
            elif stripped.startswith("* ") and not stripped.startswith("**"):
                if cur:
                    items.append(cur)
                cur = stripped[2:].strip()
            elif cur and stripped and not stripped.startswith("##"):
                # 续行：合并进当前列表项
                cur += " " + stripped
        if cur:
            items.append(cur)
        if items:
            entries[ver] = {"tagline": {"zh": ""}, "items": [{"zh": clean_md(i)} for i in items]}
            print(f"  [解析] {ver}：{len(items)} 条更新")
    return entries


# ---------------------------------------------------------------
# 解析器：OBS RELEASE_NOTES
#   格式：# OBS 排障助手 V2.3.0 发布说明\n> 发布主题：**xxx**\n## 新增功能\n### 1. 标题\n- 要点
# ---------------------------------------------------------------
def parse_obs_release_notes(path: str) -> dict:
    d = Path(path)
    if not d.is_dir():
        print(f"  [跳过] 找不到目录 {d}")
        return {}
    entries = {}
    files = sorted(d.glob("RELEASE_NOTES_v*.md"))
    for f in files:
        text = f.read_text(encoding="utf-8-sig", errors="ignore")
        vm = re.search(r"#\s*OBS 排障助手\s*[Vv](\d+\.\d+\.\d+)", text)
        if not vm:
            continue
        ver = "v" + vm.group(1)
        # 发布主题（去除 markdown 加粗星号）
        tagline = ""
        tm = re.search(r">\s*发布主题[：:]\s*(.+?)\s*$", text, re.M)
        if tm:
            tagline = clean_md(tm.group(1))
        # 各 ### 小节标题作为主要更新条目
        items = []
        for hm in re.finditer(r"^###\s+\d+\.\s*(.+?)\s*$", text, re.M):
            items.append(clean_md(hm.group(1)))
        if not items:
            # 退路：取 "## 新增功能" 下所有 - 要点
            for line in text.splitlines():
                line = line.strip()
                if line.startswith("-"):
                    items.append(clean_md(line[1:]))
        if items:
            entries[ver] = {
                "tagline": {"zh": tagline},
                "items": [{"zh": i} for i in items],
            }
            print(f"  [解析] {ver}：{len(items)} 条更新"
                  + (f"，主题：{tagline[:30]}..." if tagline else ""))
    return entries


PARSERS = {
    "winhelp_readme": parse_winhelp_readme,
    "obs_release_notes": parse_obs_release_notes,
}


# ---------------------------------------------------------------
# 工具函数
# ---------------------------------------------------------------
def clean_md(text: str) -> str:
    """去除 markdown 加粗/斜体星号，保留其余内容。"""
    return re.sub(r"\*+", "", text or "").strip()


def version_key(v: str):
    nums = re.findall(r"\d+", v)
    return [int(x) for x in nums[:3]] or [0, 0, 0]


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
# 合并：自动源 + 手动源 + 已有英文翻译
# ---------------------------------------------------------------
def merge_entry(base_zh: dict | None, manual: dict | None, existing: dict | None) -> dict:
    """合并出一个条目：{version, tagline: {zh,en}, items: [{zh,en}...]}"""
    # 中文：手动源优先（可覆盖自动解析），否则自动源
    zh_tagline = ""
    zh_items = []
    if manual and manual.get("tagline", {}).get("zh"):
        zh_tagline = manual["tagline"]["zh"]
    elif base_zh and base_zh.get("tagline", {}).get("zh"):
        zh_tagline = base_zh["tagline"]["zh"]
    if manual and manual.get("items"):
        zh_items = [i["zh"] for i in manual["items"] if i.get("zh")]
    elif base_zh and base_zh.get("items"):
        zh_items = [i["zh"] for i in base_zh["items"] if i.get("zh")]

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
    print("YYRMM 的软件库 — 更新记录一键同步")
    print("=" * 62)

    # 1) 自动解析
    auto_data: dict[str, dict] = {}
    print("\n[1/4] 自动解析源码仓库更新日志：")
    for key, cfg in AUTO_SOURCES.items():
        print(f"  · {cfg['desc']}")
        parser = PARSERS.get(cfg["type"])
        if parser:
            auto_data[key] = parser(cfg["path"])

    # 2) 手动维护源（结构：{ key: [ {version, tagline, items}, ... ] }）
    manual_raw: dict[str, list] = {}
    if MANUAL_SRC.exists():
        manual_raw = json.loads(MANUAL_SRC.read_text(encoding="utf-8"))
        print("\n[2/4] 读取手动维护源 changelog-source.json：")
        for key, entries in manual_raw.items():
            print(f"  · {key}：{len(entries)} 个版本条目")
    else:
        print(f"\n[2/4] 未找到 {MANUAL_SRC.name}，跳过手动源")
    # 转成 { key: { version: entry } } 便于按版本合并
    manual_data: dict[str, dict] = {}
    for key, entries in manual_raw.items():
        manual_data[key] = {}
        for e in entries:
            if e.get("version"):
                manual_data[key][e["version"]] = e

    # 3) 已有英文翻译
    existing_en = load_existing_en()
    print(f"\n[3/4] 保留现有英文翻译：{sum(len(v) for v in existing_en.values())} 条")

    # 4) 合并输出
    all_keys = set(auto_data) | set(manual_data)
    output = {}
    print("\n[4/4] 合并并保留最新 3 版：")
    for key in sorted(all_keys):
        merged = {}
        for ver, base in auto_data.get(key, {}).items():
            manual_ver = manual_data.get(key, {}).get(ver) or (
                manual_data.get(key, {}).get(ver.lower()) or None
            )
            existing_ver = existing_en.get(key, {}).get(ver)
            merged[ver] = merge_entry(base, manual_ver, existing_ver)
        for ver, manual_entry in manual_data.get(key, {}).items():
            if ver not in merged:
                merged[ver] = merge_entry(None, manual_entry, existing_en.get(key, {}).get(ver))
        # 按版本号降序，保留最新 MAX_VERSIONS 个
        merged = dict(
            sorted(merged.items(), key=lambda kv: version_key(kv[0]), reverse=True)
        )
        kept = list(merged.items())[:MAX_VERSIONS]
        dropped = len(merged) - len(kept)
        output[key] = [{"version": v, **e} for v, e in kept]
        print(f"  · {key}：保留 {len(kept)} 版"
              + (f"（丢弃 {dropped} 个旧版）" if dropped else ""))

    # 5) 写文件
    header = (
        "/* ============================================================\n"
        " * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改\n"
        " * 重新生成：python scripts/sync-changelog.py\n"
        " * 每个软件仅保留最新 3 个版本；en 为空时页面自动回退显示中文\n"
        " * ============================================================ */\n"
    )
    OUT_JS.write_text(
        header + "const CHANGELOG = " + json.dumps(output, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    total = sum(len(v) for v in output.values())
    print(f"\n✅ 完成：已生成 {OUT_JS.relative_to(ROOT)}（{len(output)} 个软件，共 {total} 条版本记录）")
    print("   手动维护：编辑 scripts/changelog-source.json 后重跑本脚本即可。")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
