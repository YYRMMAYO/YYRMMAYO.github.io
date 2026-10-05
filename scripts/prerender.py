#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
prerender.py — 首页预渲染 + SEO 元数据生成
============================================================
站点本来「改 main.js 即生效、无构建」，但首页的软件卡片是 JS 运行时填的：
Googlebot 会跑 JS，百度 / Bing / 社交平台的预览抓取通常不会，它们看到的首页是空的。
本脚本把卡片预渲染成静态 HTML 写进 index.html，并顺手把各页的 SEO 元数据刷新一遍。

做四件事：
  1) 在 Node 沙箱里跑一遍 assets/js/main.js，取它**自己渲染出的**卡片 HTML
     （见 scripts/prerender-harness.js，避免在 Python 里再维护一套模板）
  2) 把卡片写进 index.html 的 #software-grid / #resource-grid（带标记，可重复执行）
  3) 刷新 7 个页面的 canonical / Open Graph / Twitter Card / JSON-LD 结构化数据
     —— 版本号、平台、许可证、下载地址都取自 main.js，不会与卡片对不上
  4) 用 git 的提交日期刷新 sitemap.xml 的 <lastmod>

用法：
  python scripts/prerender.py

什么时候要重跑：
  · 增删软件 / 改简介 / 改版本号 / 改标签（首页静态卡片要跟着变）
  · 改了 detail/ 下的页面标题或 description
  · 平时只改样式、改文案（I18N）不需要重跑

注意：文件里 <!-- PRERENDER:... --> 与 <!-- SEO:... --> 之间的内容由本脚本生成，
      不要手改，手改会在下次运行本脚本时被覆盖。
"""

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://yyrmmayo.github.io"
OG_IMAGE = f"{SITE}/assets/images/og-cover.png"

PAGES = [
    {"file": "index.html", "url": "/", "key": None},
    {"file": "detail/obs.html", "url": "/detail/obs.html", "key": "obs"},
    {"file": "detail/aistudio.html", "url": "/detail/aistudio.html", "key": "aistudio"},
    {"file": "detail/obs-plugin.html", "url": "/detail/obs-plugin.html", "key": "obs-plugin"},
    {"file": "detail/obs-mac.html", "url": "/detail/obs-mac.html", "key": "obs-mac"},
    {"file": "detail/sinan.html", "url": "/detail/sinan.html", "key": "sinan"},
    {"file": "detail/love101.html", "url": "/detail/love101.html", "key": "love101"},
]

# 每页在 sitemap 里的权重 / 更新频率
SITEMAP_META = {
    "/": ("1.0", "weekly"),
    "/detail/obs.html": ("0.9", "weekly"),
    "/detail/aistudio.html": ("0.8", "monthly"),
    "/detail/obs-plugin.html": ("0.8", "monthly"),
    "/detail/obs-mac.html": ("0.8", "monthly"),
    "/detail/sinan.html": ("0.6", "yearly"),  # 已停止开发，仅存档
    "/detail/love101.html": ("0.7", "monthly"),
}

CARDS_BEGIN = "<!-- PRERENDER:START 由 scripts/prerender.py 生成，勿手改 -->"
CARDS_END = "<!-- PRERENDER:END -->"
SEO_BEGIN = "<!-- SEO:START 由 scripts/prerender.py 生成，勿手改 -->"
SEO_END = "<!-- SEO:END -->"


# ---------------------------------------------------------------
# 0. 跑 harness
# ---------------------------------------------------------------
def run_harness() -> dict:
    proc = subprocess.run(
        ["node", str(ROOT / "scripts" / "prerender-harness.js")],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=str(ROOT),
    )
    if proc.returncode != 0:
        raise SystemExit("prerender-harness.js 运行失败：\n" + (proc.stderr or "")[:2000])
    return json.loads(proc.stdout)


# ---------------------------------------------------------------
# 1. 首页卡片
# ---------------------------------------------------------------
def inject_cards(text: str, grid_id: str, html: str) -> str:
    """把静态卡片写进指定 id 的容器里（保留容器标签本身）。

    按行定位容器的配对闭合标签，而不是用非贪婪正则 —— 卡片的深层嵌套
    `</div>` 会让 `.*?` 提前收尾，结果每跑一次就多叠一份卡片。
    """
    lines = text.split("\n")

    open_idx = next(
        (i for i, ln in enumerate(lines) if f'<div id="{grid_id}" class="grid">' in ln),
        None,
    )
    if open_idx is None:
        raise SystemExit(f'index.html 里找不到 <div id="{grid_id}" class="grid"> 容器')

    indent = lines[open_idx][: len(lines[open_idx]) - len(lines[open_idx].lstrip())]
    close_tag = indent + "</div>"
    close_idx = next(
        (j for j in range(open_idx + 1, len(lines)) if lines[j] == close_tag),
        None,
    )
    if close_idx is None:
        raise SystemExit(f'<div id="{grid_id}"> 找不到配对的闭合标签（缩进 {len(indent)} 空格）')

    body_indent = indent + "  "
    block = [body_indent + CARDS_BEGIN]
    block += [body_indent + ln if ln.strip() else "" for ln in html.strip().split("\n")]
    block.append(body_indent + CARDS_END)

    lines[open_idx + 1: close_idx] = block
    return "\n".join(lines)


# ---------------------------------------------------------------
# 2. SEO 元数据
# ---------------------------------------------------------------
def esc(s: str) -> str:
    return (
        (s or "")
        .replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def read_page_meta(text: str) -> tuple:
    title = re.search(r"<title>(.*?)</title>", text, re.S)
    desc = re.search(r'<meta name="description" content="(.*?)"\s*/?>', text, re.S)
    return (title.group(1).strip() if title else "", desc.group(1).strip() if desc else "")


def jsonld_script(payload: dict) -> str:
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    body = body.replace("</", "<\\/")  # 防止 </script> 提前闭合
    return '<script type="application/ld+json">\n' + body + "\n  </script>"


def build_seo_block(page: dict, text: str, sw: dict) -> str:
    url = SITE + page["url"]
    title, desc = read_page_meta(text)

    if page["key"] is None:
        og_title = title
        og_desc = desc
        ld = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": title,
            "alternateName": "YYRMM's Software Library",
            "url": SITE + "/",
            "description": desc,
            "inLanguage": ["zh-CN", "en"],
            "author": {
                "@type": "Person",
                "name": "YYRMMAYO",
                "url": "https://github.com/YYRMMAYO",
            },
        }
    else:
        entry = sw.get(page["key"])
        if entry is None:
            raise SystemExit(f'main.js 的 softwareList 里没有 key = "{page["key"]}"')
        zh_name = entry["name"]["zh"]
        en_name = entry["name"].get("en", "")
        og_title = zh_name
        og_desc = desc
        ld = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": zh_name,
            "url": url,
            "description": desc,
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": entry.get("os", "Windows"),
            "isAccessibleForFree": True,
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "CNY"},
            "author": {
                "@type": "Person",
                "name": "YYRMMAYO",
                "url": "https://github.com/YYRMMAYO",
            },
        }
        if en_name and en_name != zh_name:
            ld["alternateName"] = en_name
        if entry.get("version"):
            ld["softwareVersion"] = entry["version"].lstrip("vV")
        if entry.get("license"):
            ld["license"] = f'https://opensource.org/licenses/{entry["license"]}'
        if entry.get("links", {}).get("download"):
            ld["downloadUrl"] = entry["links"]["download"]

    lines = [
        "  " + SEO_BEGIN,
        f'  <link rel="canonical" href="{esc(url)}" />',
        '  <meta property="og:type" content="website" />',
        f'  <meta property="og:site_name" content="{esc("YYRMM的软件库")}" />',
        '  <meta property="og:locale" content="zh_CN" />',
        f'  <meta property="og:title" content="{esc(og_title)}" />',
        f'  <meta property="og:description" content="{esc(og_desc)}" />',
        f'  <meta property="og:url" content="{esc(url)}" />',
        f'  <meta property="og:image" content="{esc(OG_IMAGE)}" />',
        '  <meta property="og:image:width" content="1200" />',
        '  <meta property="og:image:height" content="630" />',
        f'  <meta property="og:image:alt" content="{esc(og_title)}" />',
        '  <meta name="twitter:card" content="summary_large_image" />',
        f'  <meta name="twitter:title" content="{esc(og_title)}" />',
        f'  <meta name="twitter:description" content="{esc(og_desc)}" />',
        f'  <meta name="twitter:image" content="{esc(OG_IMAGE)}" />',
        "  " + jsonld_script(ld),
        "  " + SEO_END,
    ]
    return "\n".join(lines)


def inject_seo(text: str, block: str) -> str:
    # 先移除上一次生成的块（连同它前后的缩进与空行），保证可重复执行
    text = re.sub(
        r"(?:[ \t]*\n)*[ \t]*" + re.escape(SEO_BEGIN) + r".*?" + re.escape(SEO_END) + r"[ \t]*",
        "",
        text,
        flags=re.S,
    )
    # 顺手清掉移除后可能留下的「只有空格的行」
    text = re.sub(r"\n[ \t]+(\n)</head>", r"\n\1</head>", text)
    return text.replace("</head>", block + "\n</head>", 1)


# ---------------------------------------------------------------
# 3. sitemap
# ---------------------------------------------------------------
def git_last_modified(rel: str) -> str:
    """取某个文件最后一次提交的日期（YYYY-MM-DD）；取不到就返回空。"""
    try:
        out = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", rel],
            capture_output=True, text=True, encoding="utf-8", cwd=str(ROOT),
        )
        return out.stdout.strip() if out.returncode == 0 else ""
    except Exception:
        return ""


def build_sitemap() -> str:
    rows = []
    for page in PAGES:
        url = SITE + page["url"]
        prio, freq = SITEMAP_META.get(page["url"], ("0.5", "monthly"))
        lastmod = git_last_modified(page["file"])
        rows.append(
            "  <url>\n"
            f"    <loc>{url}</loc>\n"
            + (f"    <lastmod>{lastmod}</lastmod>\n" if lastmod else "")
            + f"    <changefreq>{freq}</changefreq>\n"
            f"    <priority>{prio}</priority>\n"
            "  </url>"
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        "<!-- 由 scripts/prerender.py 生成，勿手改 -->\n"
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(rows)
        + "\n</urlset>\n"
    )


# ---------------------------------------------------------------
# main
# ---------------------------------------------------------------
def write(path: Path, text: str) -> None:
    """按原样写回：UTF-8，保留 BOM 的有无，行尾统一 LF（仓库里存的是 LF）。

    文件不存在（如首次生成 sitemap.xml）时按无 BOM 写入。
    read_text 会把 BOM 读成 \\ufeff 留在字符串开头，写回前必须先剥掉，
    否则会写成两个 BOM。
    """
    raw = path.read_bytes() if path.exists() else b""
    bom = raw.startswith(b"\xef\xbb\xbf")
    text = text.replace("\r\n", "\n").lstrip("\ufeff")
    out = text.encode("utf-8")
    if bom:
        out = b"\xef\xbb\xbf" + out
    if out != raw:
        path.write_bytes(out)


def main() -> None:
    print("=" * 62)
    print("YYRMM 的软件库 — 首页预渲染 + SEO 元数据")
    print("=" * 62)

    payload = run_harness()
    data, cards = payload["data"], payload["cards"]
    sw = {s["key"]: s for s in data["softwareList"] if s.get("key")}
    print(f"\n[1/4] 从 main.js 取到 {len(data['softwareList'])} 个软件 / "
          f"{len(data.get('resourceList', []))} 条资料")

    index = ROOT / "index.html"
    text = index.read_text(encoding="utf-8")
    text = inject_cards(text, "software-grid", cards["softwareGrid"])
    text = inject_cards(text, "resource-grid", cards["resourceGrid"])
    print(f"[2/4] 首页卡片已预渲染（软件 {len(cards['softwareGrid'])} 字符 / "
          f"资料 {len(cards['resourceGrid'])} 字符）")

    for page in PAGES:
        path = ROOT / page["file"]
        body = text if page["file"] == "index.html" else path.read_text(encoding="utf-8")
        body = inject_seo(body, build_seo_block(page, body, sw))
        write(path, body)
    print(f"[3/4] SEO 元数据已刷新：{len(PAGES)} 个页面"
          "（canonical / OG / Twitter / JSON-LD）")

    sitemap = ROOT / "sitemap.xml"
    write(sitemap, build_sitemap())
    print(f"[4/4] sitemap.xml 已生成：{len(PAGES)} 个 URL")

    print("\n[OK] 完成。记得一起提交 index.html、detail/*.html 与 sitemap.xml。")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
