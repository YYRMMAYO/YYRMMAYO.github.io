/* ============================================================
 * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改
 * 重新生成：python scripts/sync-changelog.py
 * 每个软件仅保留最新 3 个版本；en 为空时页面自动回退显示中文
 * ============================================================ */
const CHANGELOG = {
  "aistudio": [
    {
      "version": "v1.1.1",
      "tagline": {
        "zh": "AI 制作资源整合中心",
        "en": "AI production resource hub"
      },
      "items": [
        {
          "zh": "五大分类资源库：视频制作 / 网页制作 / 图像生成 / 音乐音频 / 文本大模型，收录 181 个主流与特色平台（含开源 AI 工具）",
          "en": "Five-category resource library: video / web / image / music / LLM, covering 181 mainstream and niche platforms (incl. open-source AI tools)"
        },
        {
          "zh": "官方图标展示：卡片与详情页自动展示官网官方图标（共 176 个），未收录时回退品牌色首字块",
          "en": "Official icons: cards and details auto-show website icons (176 total), falling back to brand-color initial blocks"
        },
        {
          "zh": "智能体与 Skill 专区：精选 32 个 AI Agent 框架与编码智能体 / 插件蒸馏 Skill 库",
          "en": "Agent & Skills section: 32 curated AI Agent frameworks plus coding-agent and skill-distillation libraries"
        },
        {
          "zh": "离线中文教程：181 篇精华教程，核心步骤 + 可直接复制的提示词模板",
          "en": "Offline Chinese tutorials: 181 curated guides with core steps and copy-paste prompt templates"
        },
        {
          "zh": "快速查找：模糊搜索（同义词扩展 + 容错）、分类筛选、收藏夹",
          "en": "Quick search: fuzzy search with synonyms and typo tolerance, category filters, favorites"
        },
        {
          "zh": "自动更新检查：应用内下载安装包并实时显示进度，或一键跳转蓝奏云网盘",
          "en": "Auto-update check: in-app installer download with live progress, or one-click netdisk jump"
        }
      ]
    }
  ],
  "guidecraft": [
    {
      "version": "v3.0.0",
      "tagline": {
        "zh": "引导式 AI 助手",
        "en": "Guided AI assistant"
      },
      "items": [
        {
          "zh": "多轮对话把模糊想法变成可运行的 Python 自动化脚本，支持千问 / DeepSeek / OpenAI / Claude 等主流模型",
          "en": "Turns vague ideas into runnable Python automation scripts via Q&A; supports Qwen / DeepSeek / OpenAI / Claude"
        },
        {
          "zh": "引导式 AI 增强：6 张场景模板卡片、按阶段快捷回复 chips、需求摘要确认栏",
          "en": "Guided AI upgrade: 6 scenario template cards, stage-based quick-reply chips, requirement confirmation bar"
        },
        {
          "zh": "沙盒试运行：生成代码可一键沙盒测试并导出项目",
          "en": "Sandbox test-run: run generated code in sandbox and export the project"
        },
        {
          "zh": "全新视觉设计系统：青绿主题色、分层表面、渐变主按钮，12 预设色板 + 任意 #RRGGBB 自定义",
          "en": "New visual design system: teal accent, layered surfaces, gradient buttons; 12 presets + custom #RRGGBB"
        },
        {
          "zh": "云端同步：WebDAV（坚果云 / Nextcloud）+ GitHub Gist，PBKDF2-SHA256 + AES-256-GCM 加密，与安卓端字节级互通",
          "en": "Cloud sync: WebDAV (Nutstore / Nextcloud) + GitHub Gist, PBKDF2-SHA256 + AES-256-GCM encryption, byte-level compatible with Android"
        },
        {
          "zh": "安卓版本：Kotlin + Jetpack Compose，与桌面端同步、主题、模型配置互通",
          "en": "Android version: Kotlin + Jetpack Compose, sharing sync, themes and model config with desktop"
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
        "zh": "插件生态打磨 —— 界面风格统一（全面去 emoji）· 本机体检全盘定位 ·",
        "en": ""
      },
      "items": [
        {
          "zh": "本机插件体检：全盘定位 OBS 安装目录（不再只搜 C 盘）",
          "en": ""
        },
        {
          "zh": "插件知识库扩充：28 → 38 个条目（v1.0 → v1.1）",
          "en": ""
        },
        {
          "zh": "界面风格统一：插件板块全面去 emoji",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.2.0",
      "tagline": {
        "zh": "插件生态（V2.2） —— 依据《docs/ROADMAP_PLUGINS.md》调研路线图完整落地：",
        "en": ""
      },
      "items": [
        {
          "zh": "插件广场升级为「全链路」页面（P0-1 / P1-1 / P1-2 / P2-1）",
          "en": ""
        },
        {
          "zh": "日志分析 × 插件嫌疑联动（P0-2）",
          "en": ""
        },
        {
          "zh": "插件数据外置到知识库通道（P0-3）",
          "en": ""
        },
        {
          "zh": "竖屏 / 多平台搭建向导（P1-3）",
          "en": ""
        },
        {
          "zh": "场景模板推荐插件标注（P2-2）",
          "en": ""
        },
        {
          "zh": "知识库扩充（v1.5 → v1.6，110 → 112 条）",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.1.0",
      "tagline": {
        "zh": "增量更新 + 知识库分离更新 + 安装包自动清理",
        "en": ""
      },
      "items": [
        {
          "zh": "增量更新（以后更新不用再整包下载）",
          "en": ""
        },
        {
          "zh": "安装包自动清理",
          "en": ""
        },
        {
          "zh": "知识库分离更新（问题库可以独立更新，不再等应用发版）",
          "en": ""
        },
        {
          "zh": "知识库扩充（v1.4 → v1.5，95 → 110 条）",
          "en": ""
        }
      ]
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
          "zh": "修复全局按钮点击无响应：v5.9.1 引入的点击动画在预览抬起阶段提前释放鼠标捕获， 导致 WPF ButtonBase 取消按压态、Click 事件不再触发；现改为在本轮输入处理完成后再释放捕获",
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
    }
  ]
};
