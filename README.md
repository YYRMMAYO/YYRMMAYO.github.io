# YYRMM 的软件库 — 个人软件展示站

> A bilingual (中文 / English) static site showcasing the software I build. Hosted on GitHub Pages for free at **https://yyrmmayo.github.io**.

纯静态个人软件展示网站：中英双语一键切换、石墨 + 深青的双主题（浅色白底 ⇄ 深色夜空）、Hero 界面预览 + 数据统计条 + 编号特性区块，手机 / 电脑自适应，零依赖、加载飞快。

## ✨ 站点特色

- **中英双语**：右上角一键切换，偏好自动记忆（localStorage），主页与各软件详情页同步生效
- **深浅双主题**：浅色是白底 + 细网格 + 柔光，深色是石墨夜空；强调色统一用一支低饱和深青，不做多彩渐变。两套主题共用同一批 CSS 变量，只改变量、风格不变，偏好自动记忆
- **Hero 界面预览**：右侧面板用纯 CSS 画成软件界面示意（窗口栏 / 侧栏 / 条目列表 / 状态栏），条目与版本号实时读自 `softwareList`，不新增任何图片，下方附一行说明
- **数据统计条**：收录作品数 / 排障知识库条目 / 单元测试 / 精选插件等真实数字（数据在 `assets/js/main.js` 的 `STATS`）
- **编号特性区块**：01 / 02 / 03 / 04 分段讲清各项目共同的做法（数据在 `main.js` 的 `FEATURES`）
- **响应式**：Hero 双栏、卡片网格、统计条与预览侧栏在窄屏自动重排为单列 / 两列
- **无第三方依赖**：无框架、无网络字体、无图片背景，全部图标为内联 SVG；背景为纯 CSS 网格与渐变
- **详细介绍页**：点击卡片「详细介绍」或标题 / 缩略图，在新窗口打开独立介绍页（内容与各仓库 README 同步）
- **更新记录**：每个软件详情页底部展示从 **GitHub Releases / Tags 拉取的最近 3 个版本**主要更新，由脚本一键同步（中英双语，英文缺失时自动回退中文）
- **直达下载**：每个软件卡片点击「下载」即跳转到对应 GitHub 仓库详情页
- **资料下载**：AI 协助整理与编写的学习资料合集，云盘一键下载（密码以醒目样式显示在按钮下方），并标注「免费发布 · 不含收费项」与问题反馈入口

## 📦 收录软件

| 软件 | 简介 | 技术栈 | 仓库 |
|---|---|---|---|
| **第101种理由** | 2.5D 恋爱叙事游戏：9 段爱情故事改编剧情，AI 生成立绘，点击推进 + 双选项互动，离线可玩，支持安卓 / Windows | HTML/CSS/JS（数据驱动） | [github.com/YYRMMAYO/love101](https://github.com/YYRMMAYO/love101) |
| **AIStudioHub** | v1.9.0：AI 制作资源整合中心，181 个主流 AI 平台与开源工具，181 篇离线中文教程，AI Agent / Skill 专区；MIT 协议 | C# / WPF (.NET 8) | [github.com/YYRMMAYO/AIStudioHub](https://github.com/YYRMMAYO/AIStudioHub) |
| **OBS帮助助手 (Windows)** | V2.9.6（更名版）：212 条离线知识库、简单录像与一键开录、智能诊断、录制守护与实时日志预警、黑屏/音频/虚拟摄像头三合一深度体检；界面与随包内容中英双语，兼容 Windows 7 SP1 – 11 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/OBS_Helper](https://github.com/YYRMMAYO/OBS_Helper) |
| **OBS 排障助手 · 插件版** | v2.8.0：纯原生 C++/Qt6 的 OBS Studio 前端停靠面板插件，七大专栏本地体检、日志分析、性能监控 | C++ / Qt6 | [github.com/YYRMMAYO/OBS_Helper_Plugin](https://github.com/YYRMMAYO/OBS_Helper_Plugin) |
| **OBS 排障助手 (macOS)** | OBS 直播排障助手 macOS 版：离线知识库、智能诊断、系统监控、场景模板 | Avalonia 11 / .NET 10 | [github.com/YYRMMAYO/OBS-Helpmac](https://github.com/YYRMMAYO/OBS-Helpmac) |
| **司南工具箱** ⛔ 已停止开发 | 最终版 v6.1.0（点击交互修复）：免费非营利 Windows 辅助工具：系统检测、清理优化、网络诊断、故障排查（现有版本仍可用） | C# / WPF (.NET 10) | [github.com/YYRMMAYO/WINhelper](https://github.com/YYRMMAYO/WINhelper) |

> GuideCraft 已于 2026-08 从站点移除。

## 📚 资料下载

首页「资料下载」板块提供由 **AI 协助整理与编写**的学习资料合集，统一存放在云盘（蓝奏云），页面只放一个入口卡片，点击「网盘下载」/ 卡片缩略图即进入云盘文件夹，输入密码即可下载；以后在云盘里新增或替换文件**无需改动网站代码**。

- 资料列表数据：`assets/js/main.js` 的 `resourceList`（`name` / `desc` / `meta` / `tags` / `links.netdisk`）
- 资料板块下方带**问题反馈**入口，指向腾讯文档《各资料的问题反馈》表单（`index.html` 中 `#resources` 区域内的 `.res-feedback`）

## 🛠️ 修改指南

- **软件列表 / 文案**：`assets/js/main.js`（`softwareList` 与 `I18N` 数据）
- **资料列表**：`assets/js/main.js` 的 `resourceList`（新增资料 = 复制一个 `{ ... },` 条目）
- **首页统计条**：`assets/js/main.js` 的 `STATS`（只放真实数字，改完请同步核对对应详情页）
- **首页编号特性**：`assets/js/main.js` 的 `FEATURES`（顺序即 01 / 02 / 03 / 04）
- **首页 Hero 界面预览**：无需改数据 —— 条目、版本徽章、状态栏都自动取自 `softwareList`
- **更新记录**：重跑 `scripts/sync-changelog.py`（详见上方「更新记录一键同步」）
- **修改样式**：`assets/css/style.css`（主页）/ `assets/css/detail.css`（详情页）；两套主题的配色全部集中在文件顶部的 `:root` 与 `[data-theme="dark"]` 两个变量块
- **改主题默认值**：`assets/js/theme.js` 里的 `var saved = "light";`
- **背景网格 / 柔光**：`style.css` 的 `.bg-scene::before`（网格，`--grid-line`）与 `.bg-scene::after`（光晕，`--glow-1/2/3`）
- **首页卡片 / SEO 元数据**：改完 `main.js` 后重跑 `python scripts/prerender.py`（见下方「让搜索引擎收录」）

## 🔍 让搜索引擎收录（SEO）

站点是纯静态的，没有后端，所以收录只靠两件事：**页面本身让爬虫读得到** + **主动去告诉搜索引擎**。

### 已经做好的（不需要你操作）

| 项目 | 位置 |
|---|---|
| `robots.txt`（允许抓取 + 指向 sitemap） | 仓库根目录 |
| `sitemap.xml`（7 个 URL，带 git 提交日期做 `lastmod`） | 仓库根目录，由脚本生成 |
| 每页 `canonical` + Open Graph + Twitter Card | 7 个页面的 `<head>`，由脚本生成 |
| 每页 JSON-LD 结构化数据（`WebSite` / `SoftwareApplication`，含版本、平台、许可证、下载地址） | 同上 |
| 首页软件卡片**预渲染成静态 HTML** | 百度 / Bing / 社交平台的预览抓取不跑 JS，静态化后它们也能读到内容 |
| OBS 三个版本之间互相静态链接 + 页脚静态链接 | 让爬虫能从任意一页走遍全站 |
| IndexNow key 文件 | 仓库根目录 `<key>.txt` |

### 需要你操作的（要账号，我做不了）

1. **Google Search Console**（最重要）
   - 打开 <https://search.google.com/search-console>，添加资源 → 选「网址前缀」→ 填 `https://yyrmmayo.github.io/`
   - 验证方式选 **HTML 标记**，把给的那串 `content` 值复制出来
   - 打开 `index.html`，把 `google-site-verification` 那一行的 `content` 换成它，push 上线后再回 GSC 点「验证」
   - 验证通过后 → 「站点地图」→ 提交 `sitemap.xml`
2. **Bing Webmaster Tools**：<https://www.bing.com/webmasters> → 可以从 GSC 一键导入
3. **百度搜索资源平台**：<https://ziyuan.baidu.com> → 添加站点 → **HTML 标签验证** → 同理替换 `index.html` 里 `baidu-site-verification` 的 `content` → 再「普通收录 → 手动提交」这 7 个 URL
   - 百度对 `github.io` 这类共享子域收录偏慢，提交后要有耐心（几周量级）

### 平时要跑的脚本

```bash
python scripts/prerender.py        # 首页静态卡片 + 全站 SEO 元数据 + sitemap（改了软件数据/页面标题后跑）
python scripts/indexnow-submit.py  # 主动通知 Bing / Yandex 等「这些页面变了」（上线后跑）
```

`prerender.py` 的所有产物都放在 `<!-- PRERENDER:... -->` 与 `<!-- SEO:... -->` 标记之间，**不要手改那两段**，下次运行会被覆盖。

### 几个注意点

- **改软件数据后一定要重跑 `prerender.py`**，否则首页静态卡片会停在旧内容（JS 版仍是最新的，但爬虫看到的是旧的）
- `index.html` 里那两行**站长验证标签不归脚本管**，可以放心手改；验证通过后也不要删，删了会掉验证
- 分享封面图 `assets/images/og-cover.png` 由 `scripts/gen-og-cover.ps1` 生成，改文案后重跑该脚本即可（Windows 上用 `powershell -File` 运行；该文件必须存成**带 BOM 的 UTF-8**，否则 PS 5.1 会读成乱码）
- 想要更好的收录效果，最有效的一步是**绑一个自己的域名**（现在是共享子域 `github.io`）；不绑也能收录，只是慢一些

## 🔄 更新记录一键同步

每个软件详情页的「更新记录」区块数据由 `scripts/sync-changelog.py` 自动生成，**不要手改** `assets/js/changelog.js`。

```bash
python scripts/sync-changelog.py
```

脚本行为（需要联网访问 GitHub API）：

1. **拉取 GitHub Releases**：`api.github.com/repos/YYRMMAYO/<仓库>/releases`，无 Release 的仓库回退 **Tags**
2. **解析 Release 正文**：提取 `- ` 列表项为更新条目，自动跳过下载/验证类小节、过滤安装包 / SHA-256 等资产噪音，每版本最多 8 条
3. **手动维护源**：`scripts/changelog-source.json` — 中英双语条目优先采用，正文缺失的版本用它兜底
4. **保留最新 3 版**：按版本号从新到旧排序，每软件仅保留最近 3 个版本，旧版本自动丢弃
5. **生成数据**：输出 `assets/js/changelog.js`，详情页渲染并提示"最近 N/3 个更新版本，来自 GitHub Releases / Tags"；`en` 字段为空时自动回退显示中文

> 发布新版本（打 tag / 发 Release）后，重跑脚本即可同步；不在 GitHub 上的版本不会展示。

## 🚀 部署方式

- 托管于 **GitHub Pages**（免费域名 `yyrmmayo.github.io`，无需自购域名）
- 使用 **GitHub Actions 自动部署**（`.github/workflows/pages.yml`）：推送 `main` 分支即自动构建并发布
- 站点为纯静态文件，通过 `.nojekyll` 跳过 Jekyll 处理

### ⚠️ 文件大小注意事项（GitHub 限制）

- GitHub 单文件硬上限 **100MB**，超过 50MB 会收到仓库警告
- 游戏本体（约 69MB 的 `games/love101.html`）已移出站点，不再托管；「在线游玩」入口同步移除，游戏改经 GitHub Releases / 网盘分发
- 站点不引入任何图片型装饰：背景网格、柔光、图标、Hero 界面预览全部是纯 CSS / 内联 SVG，改版不会增加图片体积
- 站点代码 + 图片资源合计 < 1MB，完全在 Pages 的 1GB 站点配额之内

## 📄 版权

- 网站代码与内容 © YYRMMAYO
- 各软件项目的版权与开源协议见对应 GitHub 仓库
