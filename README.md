# YYRMM 的软件库 — 个人软件展示站

> A bilingual (中文 / English) static site showcasing the software I build. Hosted on GitHub Pages for free at **https://yyrmmayo.github.io**.

纯静态个人软件展示网站：中英双语一键切换、现代简约卡片布局、手机/电脑自适应，零依赖、加载飞快（页面文件约 12KB，另含头像图约 150KB）。

## ✨ 站点特色

- **中英双语**：右上角一键切换，偏好自动记忆（localStorage），主页与各软件详情页同步生效
- **Neo Kinpaku 主题**：深色漆面 + 金箔金 / 铜绿双色，细线边框、扁平克制（设计规范参考 impeccable），无任何外部依赖
- **响应式**：卡片网格自适应，手机 / 平板 / 桌面均舒适浏览
- **开场动画**：首次进入自动播放软件巡礼动画（AIStudioHub / OBS 排障助手 / 司南工具箱），可跳过 / 重播
- **详细介绍页**：点击卡片「详细介绍」或标题 / 缩略图，在新窗口打开独立介绍页（内容与各仓库 README 同步）
- **直达下载**：每个软件卡片点击「下载」即跳转到对应 GitHub 仓库详情页

## 📦 收录软件

| 软件 | 简介 | 技术栈 | 仓库 |
|---|---|---|---|
| **第101种理由** | 2.5D 恋爱叙事游戏：9 段爱情故事改编剧情，AI 生成立绘，点击推进 + 双选项互动，离线可玩，支持安卓 / Windows / 浏览器 | HTML/CSS/JS（数据驱动） | [github.com/YYRMMAYO/love101](https://github.com/YYRMMAYO/love101) |
| **AIStudioHub** | AI 制作资源整合中心：181 个主流 AI 平台与开源工具，离线中文教程，AI Agent / Skill 专区 | C# / WPF (.NET 8) | [github.com/YYRMMAYO/AIStudioHub](https://github.com/YYRMMAYO/AIStudioHub) |
| **GuideCraft** | 引导式 AI 助手：多轮对话把想法变成可运行的 Python 自动化脚本，支持主流大模型 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/GuideCraft](https://github.com/YYRMMAYO/GuideCraft) |
| **OBS 排障助手 (Windows)** | OBS 直播排障工具：110 条离线知识库、智能诊断、OBS 控制台、全局热键、一键搭建直播间 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/OBS_Helper](https://github.com/YYRMMAYO/OBS_Helper) |
| **OBS 排障助手 (macOS)** | OBS 直播排障助手 macOS 版：离线知识库、智能诊断、系统监控、场景模板 | Rust (Tauri v2) + Blazor WASM | [github.com/YYRMMAYO/OBS-Helpmac](https://github.com/YYRMMAYO/OBS-Helpmac) |
| **司南工具箱** | 免费非营利 Windows 辅助工具：系统检测、清理优化、网络诊断、故障排查 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/WINhelper](https://github.com/YYRMMAYO/WINhelper) |


- **修改样式**：`assets/css/style.css`

## 🚀 部署方式

- 托管于 **GitHub Pages**（免费域名 `yyrmmayo.github.io`，无需自购域名）
- 使用 **GitHub Actions 自动部署**（`.github/workflows/pages.yml`）：推送 `main` 分支即自动构建并发布
- 站点为纯静态文件，通过 `.nojekyll` 跳过 Jekyll 处理

## 📄 版权

- 网站代码与内容 © YYRMMAYO
- 各软件项目的版权与开源协议见对应 GitHub 仓库
