/* ============================================================
 * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改
 * 重新生成：python scripts/sync-changelog.py
 * 数据来源：GitHub Releases / Tags（每个软件最近 3 个版本）
 * 生成时间：2026-08-23 12:47
 * ============================================================ */
const CHANGELOG = {
  "aistudio": [
    {
      "version": "v1.9.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "视频 +4：Descript、Mochi 1、Pyramid Flow、AnimateDiff",
          "en": ""
        },
        {
          "zh": "网页 +6：Windsurf、Roo Code、Tempo、Firebase Studio、WeWeb、Mixo",
          "en": ""
        },
        {
          "zh": "图像 +5：Canva AI、Freepik、Microsoft Designer、Photoroom、Qwen-Image",
          "en": ""
        },
        {
          "zh": "音乐音频 +5：Kits AI、Murf AI、ACE-Step、Kokoro TTS、CosyVoice",
          "en": ""
        },
        {
          "zh": "文本大模型 +7：秘塔 AI 搜索、纳米 AI 搜索、知乎直答、阶跃星辰、Poe、LM Studio、RAGFlow",
          "en": ""
        },
        {
          "zh": "每个新资源均配齐一句话简介、详细介绍与中文教程（核心步骤 + 可直接复制的提示词模板），教程共 181 篇",
          "en": ""
        },
        {
          "zh": "新增资源官方图标 25 枚（共 176 枚），未收录图标继续回退品牌色首字块",
          "en": ""
        },
        {
          "zh": "项目现以 MIT 协议开源发布（LICENSE + 全部源码 SPDX 头 + README + 关于页已同步）",
          "en": ""
        }
      ]
    },
    {
      "version": "v1.8.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "列表卡片与详情页头部不再只是「色块 + 首字」：现在直接展示各 AI 工具官网官方图标（共 151 个）",
          "en": ""
        },
        {
          "zh": "图标来源：官网 favicon / apple-touch-icon、GitHub 仓库所属组织头像，favicon.im 兜底；统一转为 ≤256px 透明 PNG 随应用内置，完全离线可用",
          "en": ""
        },
        {
          "zh": "未收录图标的 3 个工具（dora / haiper / haiyi，官网仅提供 SVG 占位图）继续使用品牌色首字块回退，不影响体验",
          "en": ""
        },
        {
          "zh": "新增可复用下载脚本 `tools/DownloadLogos.py`：后续新增资源可一键批量补图（缺失清单见 `tools/_missing_logos.json`）",
          "en": ""
        },
        {
          "zh": "Logo 路径惰性缓存：搜索/筛选刷新时不再对每张卡片重复访问磁盘",
          "en": ""
        },
        {
          "zh": "资源 Id 增加路径安全校验，避免非法 Id 逃逸出图标目录",
          "en": ""
        }
      ]
    },
    {
      "version": "v1.7.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "通用 Agent：Manus（现象级通用 AI Agent，现属 Meta）",
          "en": ""
        },
        {
          "zh": "AI 软件工程师：Devin（Cognition，桌面端含原 Windsurf）",
          "en": ""
        },
        {
          "zh": "代码/文档：Zed（Rust 高性能 AI 编辑器）、DeepWiki（任意 GitHub 仓库可对话文档）",
          "en": ""
        },
        {
          "zh": "开源 Agent 库：browser-use（AI 操作浏览器，108k★）、Open Interpreter（自然语言操作电脑）",
          "en": ""
        },
        {
          "zh": "工作流/可视化：Langflow（拖拽构建 Agent 工作流，152k★）、Napkin AI（文字转图表/演示）",
          "en": ""
        },
        {
          "zh": "数字人：D-ID（AI 数字人视频平台）",
          "en": ""
        },
        {
          "zh": "全部新条目均含简介、详细介绍、版权信息与教程引导（步骤 + 提示词模板）",
          "en": ""
        },
        {
          "zh": "资源 145 → 154，教程 145 → 154（100% 覆盖）",
          "en": ""
        }
      ]
    }
  ],
  "guidecraft": [
    {
      "version": "v2.0.1",
      "tagline": {
        "zh": "设置导航重构 + 引导动画回归",
        "en": ""
      },
      "items": [
        {
          "zh": "左侧导航从 RadioButton+Converter 改为 ListBox+ObservableCollection，根除 RadioButton 组 ConvertBack 回环 bug（点击任何 tab 都会弹回首个 tab）",
          "en": ""
        },
        {
          "zh": "新增 NotNullConverter 类（替代反向的 InverseBoolConverter 用于\"选中后可用\"判断）",
          "en": ""
        },
        {
          "zh": "StringEqualsBoolConverter.ConvertBack 同步加固（Binding.DoNothing + 枚举解析）",
          "en": ""
        },
        {
          "zh": "About tab 版本号用 Run.Text 绑定永远空白（Run.Text 非依赖属性）→ 改用 TextBlock Text 绑定",
          "en": ""
        },
        {
          "zh": "MainWindow 之前未订阅 WelcomeStepChanged 事件，WelcomeOverlay 静态显示 → 订阅后卡片淡入+缩放+上浮 + 圆点高亮随步骤切换",
          "en": ""
        },
        {
          "zh": "删除导航 7 个 emoji（🤖🎨🌐🧭⚡📊ℹ️）和内容区\"＋ 新增\"→\"新增\"",
          "en": ""
        },
        {
          "zh": "Models tab 空状态加引导提示",
          "en": ""
        },
        {
          "zh": "App.xaml.cs 崩溃日志路径 → 系统临时目录",
          "en": ""
        }
      ]
    },
    {
      "version": "v1.5.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "The ✕ button in the drawer header",
          "en": ""
        },
        {
          "zh": "Clicking the dimmed area outside the drawer",
          "en": ""
        },
        {
          "zh": "Pressing `Esc` The drawer is 480px wide by default and can be dragged between 380px and 640px via a 4px `GridSplitter` o…",
          "en": ""
        },
        {
          "zh": "模型 — full CRUD for user-defined model profiles",
          "en": ""
        },
        {
          "zh": "外观 — light / dark theme",
          "en": ""
        },
        {
          "zh": "语言 — UI language (简体中文 / English)",
          "en": ""
        },
        {
          "zh": "布局 — sidebar position (left / right)",
          "en": ""
        },
        {
          "zh": "关于 — version, update check, download link The \"module page\" that lived in the content area is gone. The \"对话 / 设置\" tabs t…",
          "en": ""
        }
      ]
    },
    {
      "version": "v1.3.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "外观 — interface theme (light / dark)",
          "en": ""
        },
        {
          "zh": "语言 / Language — UI language (简体中文 / English)",
          "en": ""
        },
        {
          "zh": "布局 — sidebar position (left / right) + drag hint",
          "en": ""
        },
        {
          "zh": "关于与更新 — version + update check + download The single overloaded settings card from v1.2.0 is replaced with this modular…",
          "en": ""
        },
        {
          "zh": "0 warnings / 0 errors in Debug and Release configurations",
          "en": ""
        },
        {
          "zh": "Self-contained Windows installer (~52 MB)",
          "en": ""
        },
        {
          "zh": "GuideCraft-Setup-1.3.0.exe MIT License · Source: [github.com/YYRMMAYO/GuideCraft](https://github.com/YYRMMAYO/GuideCraft…",
          "en": ""
        }
      ]
    }
  ],
  "love101": [
    {
      "version": "v1.0.0",
      "tagline": {
        "zh": "一个关于爱的 2.5D 叙事游戏",
        "en": "A 2.5D narrative game about love"
      },
      "items": [
        {
          "zh": "9 段爱情故事改编剧情，AI 生成立绘，部分场景 CSS 3D 半立体呈现",
          "en": "9 adapted love stories with AI-generated art and CSS 3D semi-stereoscopic scenes"
        },
        {
          "zh": "点击推进剧情 + 双选项互动，进度自动保存，完全离线可玩",
          "en": "Tap to advance, two-choice interactions, auto-saved progress, fully offline"
        },
        {
          "zh": "支持安卓 / Windows / 浏览器三端运行",
          "en": "Playable on Android / Windows / browser"
        }
      ]
    }
  ],
  "obs": [
    {
      "version": "v2.3.0",
      "tagline": {
        "zh": "插件生态打磨（去 emoji 统一设计 · 本机体检全盘定位 · 插件目录 38 条）",
        "en": ""
      },
      "items": [
        {
          "zh": "自动化：Source Switcher（来源自动轮播）、Media Controls（媒体控制面板）、 URL Source（API/URL 数据上屏）；",
          "en": ""
        },
        {
          "zh": "视觉特效：Freeze Filter（画面冻结保险丝）、Retro Effects（CRT/VHS 复古特效）；",
          "en": ""
        },
        {
          "zh": "AI 智能：Auto Subtitle（讯飞实时中文字幕，国内直连）;",
          "en": ""
        },
        {
          "zh": "音频：Waveform（高精度实时波形可视化）；",
          "en": ""
        },
        {
          "zh": "多平台 / 竖屏：Source Dock（来源投独立窗口监看）、Spout2 输入输出（与 TouchDesigner / Resolume 等 GPU 纹理互通）；",
          "en": ""
        },
        {
          "zh": "录制 / 后期：Replay Source（回放缓冲即时重播）。 收录前逐一验证仓库可达性与 Releases 资产；「直达下载」按钮全部有效。 知识库走分离热更新通道：老版本（V2.2+）用户无需升级应用即可收到新目录。",
          "en": ""
        },
        {
          "zh": "插件广场页与全部联动入口（日志分析 / 智能诊断 / 场景模板 / 搭建向导 / 模板推荐插件行）统一为纯文字 + 品牌色徽标风格，与全应用设计语言一致；",
          "en": ""
        },
        {
          "zh": "分类筛选 chips 与分区标题不再渲染知识库自带的 icon 字段——即使外部热更新的 目录数据仍带旧图标，界面也不会再出现 emoji（字段保留以兼容旧版数据解析）；",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.2.0",
      "tagline": {
        "zh": "插件生态（目录热更新 · 本机体检 · 日志联动 · 搭建向导）",
        "en": ""
      },
      "items": [
        {
          "zh": "本机已装插件体检（只读）：扫描 OBS 安装目录（进程 / 注册表 / 默认路径三重定位， 兼容便携版与用户级插件目录），枚举已装插件的 DLL 名称与文件版本； 顶部新增「本机已装 N 个插件」面板，逐条标注 「广场收录 / 未收录」，…",
          "en": ""
        },
        {
          "zh": "直达 Releases 下载：每张卡片新增「⬇ 下载」按钮，直达该插件 GitHub Releases 最新版页面； 并展示「最新 vX.Y.Z」角标。查询走 GitHub API，带内存 + 磁盘双层缓存（24h 保鲜）与 在途请求合并，…",
          "en": ""
        },
        {
          "zh": "AI 插件性能预算提示（P1-2）：AI 分类的卡片标注公开开销参考 （抠像约 +5~15% CPU / 100~300MB 内存，字幕约 +5~10% CPU / 200~500MB 等）， 并联动系统监控实时采样——空闲内存 < 500…",
          "en": ""
        },
        {
          "zh": "关注插件启动查新（P2-1）：卡片可「☆ 关注」，应用启动时静默检查新版本 （24h 节流，首次关注先建立基线不轰炸），有新版仅角落 Toast 不弹窗。",
          "en": ""
        },
        {
          "zh": "日志分析器新增「嫌疑模块」提取：`os_dlopen(...)` 加载失败、`Module '...' not loaded`、 崩溃报告肇事模块等线索都会提取出具体 DLL 名。",
          "en": ""
        },
        {
          "zh": "命中的发现卡片上直接给出 「🧩 在插件广场查看 →」 跳转按钮（能对上广场条目时）， 未收录的也会显示嫌疑模块名便于排查；智能诊断页同步支持。",
          "en": ""
        },
        {
          "zh": "新增两条日志规则：检测到 StreamFX（停更插件）→ 给出迁移建议； 检测到 obs-multi-rtmp → 提示已知问题与 Aitum Multistream 替代评估。",
          "en": ""
        },
        {
          "zh": "插件广场 7 分类 × 28 个精选条目全部外置到 `plugins.json`， 与问题库共用同一套分离热更新机制：本地覆盖文件 + 内嵌种子 + 远程双通道 （GitHub raw 主通道 / Release 资产 `OBS_Helpe…",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.1.1",
      "tagline": {
        "zh": "交叉检验修复（更新链路加固）",
        "en": ""
      },
      "items": []
    }
  ],
  "obs-mac": [
    {
      "version": "v1.5.0",
      "tagline": {
        "zh": "功能与 Windows 版对齐的 macOS 原生桌面应用",
        "en": "Native macOS app, feature-aligned with the Windows version"
      },
      "items": [
        {
          "zh": "知识库完全离线：内置分类问题库与 Markdown 排障指引，断网也能用",
          "en": "Fully offline knowledge base: categorized Q&A and Markdown guides, usable without internet"
        },
        {
          "zh": "本地智能诊断：读取系统信息、OBS 日志与配置，由本地规则引擎定位问题，零费用、纯离线",
          "en": "Local smart diagnosis: reads system info, OBS logs and config; on-device rule engine, free and fully offline"
        },
        {
          "zh": "远程控制 OBS：切换场景、录制/推流/虚拟摄像头、音频管理、定时停止，支持菜单栏、全局热键、迷你小窗三种入口",
          "en": "Remote OBS control: scene switching, record/stream/virtual cam, audio, scheduled stop; via menu bar, global hotkeys or mini window"
        },
        {
          "zh": "深度日志分析：离线解析 OBS 日志，脱敏 + 特征规则扫描，一键体检配置",
          "en": "Deep log analysis: offline OBS log parsing with sanitization and signature rules, one-click health check"
        },
        {
          "zh": "场景模板一键落地：连上 OBS 一键生成场景与来源，或导出标准场景集合 JSON",
          "en": "One-click scene templates: generate scenes and sources on OBS, or export standard scene JSON"
        },
        {
          "zh": "隐私优先：默认不发起任何网络请求，API Key 与 OBS 密码经系统钥匙串加密保存",
          "en": "Privacy first: no network requests by default; API keys and OBS passwords encrypted in the system keychain"
        }
      ]
    }
  ],
  "sinan": [
    {
      "version": "v6.0.1",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "修复全局按钮点击无响应：v5.9.1 引入的点击动画在预览抬起阶段提前释放鼠标捕获，导致 WPF ButtonBase 取消按压态、Click 事件不再触发；现改为在本轮输入处理完成后再释放捕获",
          "en": ""
        },
        {
          "zh": "v6.0.0 的全部更新一并包含",
          "en": ""
        }
      ]
    },
    {
      "version": "v6.0.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "新增「WiFi 密码」模块：一键列出本机已保存的无线网，查看 / 复制明文密码（netsh 只读查询，不修改任何设置；显示前双重确认）",
          "en": ""
        },
        {
          "zh": "模块精简：移除「陪伴运行」小窗与「网站与官网」页（与 WIN 助手功能重复），聚焦新手修电脑核心场景",
          "en": ""
        },
        {
          "zh": "清理死代码（插件清单机制等），版本号进入 6.x",
          "en": ""
        }
      ]
    },
    {
      "version": "v5.9.1",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "模块瘦身：移除截图标注 / 录音录像 / 便签页 / 月度报告 / 装机助手，聚焦系统维护与排障核心",
          "en": ""
        },
        {
          "zh": "按钮风格全面统一：全局「印刷标签」模板（圆角 4 + 统一悬停/按压反馈），取代系统默认外观",
          "en": ""
        },
        {
          "zh": "修复 UI 残留：导航切换后不再残留强调色块；点击动画完整回弹、跳页后无残影",
          "en": ""
        }
      ]
    }
  ]
};
