# YYRMM 的软件库 — 个人软件展示站

> A bilingual (中文 / English) static site showcasing the software I build. Hosted on GitHub Pages for free at **https://yyrmmayo.github.io**.

纯静态个人软件展示网站：七夕 · 星河浪漫主题（夜空 · 星光 · 银河 · 鹊桥），右侧弧形滚轮式导航盘，中英双语一键切换，手机/电脑自适应，零依赖（页面文件约 30KB，另含头像图约 150KB）。

## ✨ 站点特色

- **七夕 · 星河主题**：夜空深紫/靛蓝基底 + 闪烁星光 + 流星 + 银河斜带 + 鹊桥装饰，金粉渐变标题（楷体系）
- **弧形滚轮式侧边导航**：右侧扇形导航盘，导航项沿弧线分布，滚轮切换 / 点击跳转 / 滚动自动高亮（移动端自动隐藏，由顶部导航兜底）
- **互动叙事游戏**：《第101种理由》— 一个关于爱的叙事游戏（全配音、多线剧情），独立页面 `games/love101.html` 一键直达
- **中英双语**：右上角一键切换，偏好自动记忆（localStorage）
- **响应式**：卡片网格自适应，手机 / 平板 / 桌面均舒适浏览
- **直达下载**：每个软件卡片点击「下载」即跳转到对应 GitHub 仓库详情页

## 🎮 游戏体验

- 地址：`games/love101.html`（约 70MB，自包含单文件，含全部语音与插画）
- 说明：游戏为独立 HTML 文件，主页通过链接跳转（不内嵌、不预加载，保证主页加载飞快）

## 📦 收录软件

| 软件 | 简介 | 技术栈 | 仓库 |
|---|---|---|---|
| **AIStudioHub** | AI 制作资源整合中心：154 个主流 AI 平台与开源工具，离线中文教程，AI Agent / Skill 专区 | C# / WPF (.NET 8) | [github.com/YYRMMAYO/AIStudioHub](https://github.com/YYRMMAYO/AIStudioHub) |
| **GuideCraft** | 引导式 AI 助手：多轮对话把想法变成可运行的 Python 自动化脚本，支持主流大模型 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/GuideCraft](https://github.com/YYRMMAYO/GuideCraft) |
| **OBS 排障助手 (Windows)** | OBS 直播排障工具：85 条离线知识库、智能诊断、OBS 控制台、全局热键、一键搭建直播间 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/OBS_Helper](https://github.com/YYRMMAYO/OBS_Helper) |
| **OBS 排障助手 (macOS)** | OBS 直播排障助手 macOS 版：离线知识库、智能诊断、系统监控、场景模板 | Rust (Tauri v2) + Blazor WASM | [github.com/YYRMMAYO/OBS-Helpmac](https://github.com/YYRMMAYO/OBS-Helpmac) |
| **司南工具箱** | 免费非营利 Windows 辅助工具：系统检测、清理优化、网络诊断、故障排查 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/WINhelper](https://github.com/YYRMMAYO/WINhelper) |

## 📁 文件结构

```
F:\WEB
├── index.html                 # 页面骨架（Hero / 游戏专区 / 关于我 / 软件列表）
├── games/love101.html         # 《第101种理由》叙事游戏（约 70MB，自包含）
├── assets/
│   ├── css/style.css          # 样式：七夕星河主题（改颜色/样式在这里）
│   ├── js/main.js             # ★ 重点：站名/文案/个人介绍/软件列表/语言字典都在这里
│   ├── js/nav.js              # 右侧弧形滚轮导航盘逻辑
│   ├── js/showcase.js         # 开场动画 + 功能展示弹窗逻辑
│   ├── js/fx.js               # 星空/流星 canvas + reveal 滚动进场
│   ├── images/avatar.png      # 头像图片
│   └── images/showcase/       # 主流产品的界面截图（aistudio / obs / sinan .jpg）
├── .github/workflows/pages.yml # 自动部署配置
└── README.md                  # 项目说明
```

- **修改样式**：`assets/css/style.css`

## 🚀 部署方式

- 托管于 **GitHub Pages**（免费域名 `yyrmmayo.github.io`，无需自购域名）
- 使用 **GitHub Actions 自动部署**（`.github/workflows/pages.yml`）：推送 `main` 分支即自动构建并发布
- 站点为纯静态文件，通过 `.nojekyll` 跳过 Jekyll 处理
- 注意：`games/love101.html` 约 70MB（< GitHub 100MB 单文件上限），正常直接提交即可，请勿使用 git-lfs（Pages 不服务 LFS 指针）

## 📄 版权

- 网站代码与内容 © YYRMMAYO
- 《第101种理由》游戏版权归其作者所有
- 各软件项目的版权与开源协议见对应 GitHub 仓库
