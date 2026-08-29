# YYRMM 的软件库 — 个人软件展示站

> A bilingual (中文 / English) static site showcasing the software I build. Hosted on GitHub Pages for free at **https://yyrmmayo.github.io**.

纯静态个人软件展示网站：中英双语一键切换、纸墨中国风双主题（宣纸浅色 ⇄ 墨色深底）、手机/电脑自适应，零依赖、加载飞快（页面文件约 20KB，另含头像图约 150KB）。

## ✨ 站点特色

- **中英双语**：右上角一键切换，偏好自动记忆（localStorage），主页与各软件详情页同步生效
- **纸墨主题**：宣纸米白 + 墨色文字 + 朱砂点睛 + 低饱和金辅助，衬线宋体标题、细线分区、极轻宣纸纹理；深色为墨色深底 + 月白文字
- **深/浅双主题**：右上角一键切换宣纸浅色 ⇄ 墨色深底，偏好自动记忆（localStorage），主页与各详情页同步生效
- **响应式**：卡片网格自适应，手机 / 平板 / 桌面均舒适浏览
- **开场动画融入版式**：标题逐字水墨浮现 + 印章落款动画，不遮挡页面、可跳过无需跳过；尊重 prefers-reduced-motion
- **详细介绍页**：点击卡片「详细介绍」或标题 / 缩略图，在新窗口打开独立介绍页（内容与各仓库 README 同步）
- **更新记录**：每个软件详情页底部展示从 **GitHub Releases / Tags 拉取的最近 3 个版本**主要更新，由脚本一键同步（中英双语，英文缺失时自动回退中文）
- **直达下载**：每个软件卡片点击「下载」即跳转到对应 GitHub 仓库详情页

## 📦 收录软件

| 软件 | 简介 | 技术栈 | 仓库 |
|---|---|---|---|
| **第101种理由** | 2.5D 恋爱叙事游戏：9 段爱情故事改编剧情，AI 生成立绘，点击推进 + 双选项互动，离线可玩，支持安卓 / Windows | HTML/CSS/JS（数据驱动） | [github.com/YYRMMAYO/love101](https://github.com/YYRMMAYO/love101) |
| **AIStudioHub** | AI 制作资源整合中心：181 个主流 AI 平台与开源工具，离线中文教程，AI Agent / Skill 专区 | C# / WPF (.NET 8) | [github.com/YYRMMAYO/AIStudioHub](https://github.com/YYRMMAYO/AIStudioHub) |
| **OBS 排障助手 (Windows)** | V2.8.2「守护与体检」：149 条离线知识库、录制守护、实时日志预警、黑屏/音频/虚拟摄像头三合一深度体检 | C# / WPF (.NET 10) | [github.com/YYRMMAYO/OBS_Helper](https://github.com/YYRMMAYO/OBS_Helper) |
| **OBS 排障助手 · 插件版** | v2.8.0：纯原生 C++/Qt6 的 OBS Studio 前端停靠面板插件，七大专栏本地体检、日志分析、性能监控 | C++ / Qt6 | [github.com/YYRMMAYO/OBS_Helper_Plugin](https://github.com/YYRMMAYO/OBS_Helper_Plugin) |
| **OBS 排障助手 (macOS)** | OBS 直播排障助手 macOS 版：离线知识库、智能诊断、系统监控、场景模板 | Avalonia 11 / .NET 10 | [github.com/YYRMMAYO/OBS-Helpmac](https://github.com/YYRMMAYO/OBS-Helpmac) |
| **司南工具箱** ⛔ 已停止开发 | 免费非营利 Windows 辅助工具：系统检测、清理优化、网络诊断、故障排查（现有版本仍可用） | C# / WPF (.NET 10) | [github.com/YYRMMAYO/WINhelper](https://github.com/YYRMMAYO/WINhelper) |

> GuideCraft 已于 2026-08 从站点移除。

## 🛠️ 修改指南

- **软件列表 / 文案**：`assets/js/main.js`（`softwareList` 与 `I18N` 数据）
- **更新记录**：重跑 `scripts/sync-changelog.py`（详见上方「更新记录一键同步」）
- **修改样式**：`assets/css/style.css`（主页）/ `assets/css/detail.css`（详情页）

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
- 站点代码 + 图片资源合计 < 1MB，完全在 Pages 的 1GB 站点配额之内

## 📄 版权

- 网站代码与内容 © YYRMMAYO
- 各软件项目的版权与开源协议见对应 GitHub 仓库
