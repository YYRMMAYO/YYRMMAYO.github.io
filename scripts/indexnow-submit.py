#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
indexnow-submit.py — 主动把站点 URL 提交给 IndexNow
============================================================
IndexNow 是一个「改了就告诉搜索引擎」的协议，参与方包括 Bing、Yandex、Seznam、
Naver 等。它**不需要注册账号**，只要在站点根目录放一个 `<key>.txt`（内容就是 key
本身），再往 api.indexnow.org POST 一次即可。Google 不参与 IndexNow，Google 那边
要走 Search Console 提交 sitemap（见 README 的「让搜索引擎收录」一节）。

用法：
  python scripts/indexnow-submit.py            # 提交 sitemap.xml 里的全部 URL
  python scripts/indexnow-submit.py --dry-run  # 只打印要提交什么，不发请求

什么时候跑：
  · 首次上线、或新增／删除页面后
  · 改了某个页面的标题、简介（想让搜索引擎尽快重抓）
  · 平时改样式、改错别字不必跑

退出码：0 = 对方接受；1 = 失败（网络异常或返回非 2xx）。
"""

import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITEMAP = ROOT / "sitemap.xml"

# 与仓库根目录的 <key>.txt 必须一致（key 是自选的 8–128 位十六进制字符串）
KEY = "105caa5712f823a2b8322cf10b085200"
HOST = "yyrmmayo.github.io"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"


def urls_from_sitemap() -> list:
    """从 sitemap.xml 取 URL —— 单一来源，避免两处清单对不上。"""
    if not SITEMAP.exists():
        raise SystemExit("找不到 sitemap.xml；先跑 python scripts/prerender.py 生成它")
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    tree = ET.parse(SITEMAP)
    urls = [el.text.strip() for el in tree.getroot().findall(".//sm:loc", ns) if el.text]
    if not urls:
        raise SystemExit("sitemap.xml 里没有 <loc> 条目")
    return urls


def main() -> int:
    dry = "--dry-run" in sys.argv
    urls = urls_from_sitemap()

    print("=" * 62)
    print("IndexNow 提交")
    print("=" * 62)
    print(f"key      : {KEY}")
    print(f"key 文件 : {KEY_LOCATION}")
    print(f"待提交   : {len(urls)} 个 URL")
    for u in urls:
        print(f"  · {u}")

    if dry:
        print("\n[dry-run] 未发送请求。")
        return 0

    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "yyrmm-site/indexnow",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            status = resp.status
            body = resp.read().decode("utf-8", "replace").strip()
    except urllib.error.HTTPError as e:
        print(f"\n[失败] HTTP {e.code}：{e.reason}")
        # 常见原因：403 = key 文件取不到或与提交的 key 不符；422 = URL 不属于该 host
        if e.code == 403:
            print("  检查 key 文件是否已部署：", KEY_LOCATION)
        print((e.read().decode("utf-8", "replace") or "")[:500])
        return 1
    except Exception as e:
        print(f"\n[失败] {e}")
        return 1

    print(f"\n[OK] IndexNow 返回 HTTP {status}"
          + ("（2xx = 已接受，搜索引擎会自行安排抓取）" if 200 <= status < 300 else ""))
    if body:
        print(body[:500])
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        sys.exit(130)
