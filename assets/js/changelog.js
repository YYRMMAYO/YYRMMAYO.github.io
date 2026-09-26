/* ============================================================
 * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改
 * 重新生成：python scripts/sync-changelog.py
 * 数据来源：GitHub Releases / Tags（每个软件最近 3 个版本）
 * 生成时间：2026-09-26 21:58
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
      "version": "v2.9.1",
      "tagline": {
        "zh": "知识库 raw 主通道修复 · 跳转式新手引导 · 官方 OBS 下载入口",
        "en": ""
      },
      "items": [
        {
          "zh": "修复「知识库 GitHub raw 主通道」自上线起从未生效：两条地址都少了仓库根下的 `NOBS/` 一层，恒返回 404 后静默落到 Release 资产兜底，知识库因此只能随发版更新",
          "en": ""
        },
        {
          "zh": "地址改正为 …/master/NOBS/…；raw 与兜底两条通道返回非 2xx / 空内容一律记入应用日志（原实现只在抛异常时记一行，而 404 属静默返回，这正是缺陷潜伏至今的原因）",
          "en": ""
        },
        {
          "zh": "地址常量集中到 `KnowledgeBaseUrls.cs` 并配单测钉死：形状校验（https + raw.githubusercontent.com + master 分支）+ 落地校验（路径必须能在本机源码树找到文件，少了 `NOBS/` 直接测试失败）",
          "en": ""
        },
        {
          "zh": "新手引导升级为「跳转式引导」：每一步自动把主界面切到对应页面（控制台 / 首页 / 诊断 / 搭建），卡片从正中挪到右下角、遮罩压到约 17% 黑，真正做到边看界面边讲",
          "en": ""
        },
        {
          "zh": "引导卡片按站内 / 站外区分跳转按钮，并给出「本步对应页面」胶囊（页面名取自主窗口路由表，不手写，页面改名不会对不上）；引导结束清空返回历史",
          "en": ""
        },
        {
          "zh": "新增官方 OBS 下载入口（搭建页顶部 / 工具箱 / 首页欢迎卡 / 引导第一步 / 快速自检）：只指向 obsproject.com 与 github.com/obsproject/obs-studio，外链走域名白名单，宁可不给直链也不跳第三方",
          "en": ""
        },
        {
          "zh": "「下载最新 Windows 安装包」经 GitHub API 解析当前稳定版资产直链（不写死版本号），解析不到就退化为打开官方发布页；界面提示可自行核对数字签名 `OBS Project Corporation`",
          "en": ""
        },
        {
          "zh": "质量基线：单元测试 381 项全部通过（新增 38 项）；中英文 README 的问题库数量由过时的「149 条（v2.0）」校正为 v2.2 的 212 条",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.9.0",
      "tagline": {
        "zh": "新手教程 · 插件广场全量复核 · 对齐 OBS 32.2.2",
        "en": ""
      },
      "items": [
        {
          "zh": "新增首启「新手教程」四步引导：连上 OBS → 出问题先来这里 → 一键体检 → 开播、装修与调教，卡片 + 进度圆点 + 跳过 / 上一步 / 下一步，随时可在「设置 → 新手引导」重看且无需重启",
          "en": ""
        },
        {
          "zh": "首启不叠弹窗：启动更新检查推迟到引导结束之后，避免引导与更新弹窗互相打架；开启「减少动画」时不播放淡入淡出",
          "en": ""
        },
        {
          "zh": "插件广场全量复核（目录 v1.3 → v1.4）：57 条逐一用 GitHub API 实测仓库是否归档、最近提交与发行时间、能否拿到 Windows 成品包",
          "en": ""
        },
        {
          "zh": "剔除 8 个已死或拿不到成品的条目（Spectralizer、OBS Detect、Win Capture Audio、Time Shift、Device Switcher、Recursion Effect 等）",
          "en": ""
        },
        {
          "zh": "修正 3 个仓库改名（`occ-ai/*` → `royshil/*`），新增 8 个维护活跃条目（Source Profiler、Record Rename、BILIBILI Stream、Branch Output、iOS Camera Source、MIDI MG 等）",
          "en": ""
        },
        {
          "zh": "插件目录新增「维护状态」字段：近 12 个月无提交或发行记为「维护放缓」并在卡片以警示色标注（6 条，均注明暂无同类替代），页面顶部给出目录版本与复核日期",
          "en": ""
        },
        {
          "zh": "对齐最新 OBS 32.2.2：修掉日志头 CPU / 内存 / 系统版本 / 帧率 / 码率在真实日志里全部解析为空（改用「可选时间戳前缀」锚定）、显卡解析出垃圾值连带双显卡错位检测失效、色彩范围规则不认 32.x 的 `YUV mode` 新格式",
          "en": ""
        },
        {
          "zh": "修复两处静默失效：实时日志尾随预警按 `*.log` 找日志而 OBS 会话日志是 `.txt`；本机插件体检漏扫 OBS 32.x「一插件一目录」新布局。并新增「插件重复安装」规则，日志分析规则增至 34 条",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.8.2",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "问题：工具箱「推流带宽计算器」与「磁盘写入基准」的四个数字输入框 （上行带宽 / 多路推流路数 / 单路码率 / 计划录像码率）在 UI 层没有任何限制， 用户可以输入任意大的数字（如 1000 万）。核心层虽有钳制不会崩溃， 但超限后静默…",
          "en": ""
        },
        {
          "zh": "修复：双层防护——",
          "en": ""
        },
        {
          "zh": "第一道（UI）：四个输入框加 `MaxLength` 长度上限与 `PreviewTextInput` 数字过滤，只放行数字与小数点，键盘 / 粘贴的非法字符一律拦截；",
          "en": ""
        },
        {
          "zh": "第二道（逻辑）：保留并复用核心层 `ClampToInt` 钳制（上行 ≤10000Mbps、 ≤32 路、单路 ≤100000kbps、磁盘基准码率 ≤1000000kbps），并在结果中追加 「注意：输入超过上限 X，已按上限计算」明示…",
          "en": ""
        },
        {
          "zh": "故障警示区代码审查通过：录制守护（`RecordWatchdogService`）、实时日志尾随预警 （`LogTailerService` + `LogAlertThrottle`）具备完整防护——同类告警去重、90 秒抑制 + 每小时限…",
          "en": ""
        },
        {
          "zh": "对照确认：控制台页端口输入已有同款数字过滤 + 1~65535 范围校验，本次将同等防护补齐到工具箱。",
          "en": ""
        },
        {
          "zh": "常规小版本更新，无配置迁移；增量更新包可直接安装。",
          "en": ""
        }
      ]
    }
  ],
  "obs-mac": [
    {
      "version": "v2.1.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
    },
    {
      "version": "v2.0.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
    },
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
  "obs-plugin": [
    {
      "version": "v2.8.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
    },
    {
      "version": "v2.7.1",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "版本号单点维护（CMakeLists 为唯一来源，打包自动解析）",
          "en": ""
        },
        {
          "zh": "插件恢复不再静默删除同名 DLL（时间戳 .bak 备份 + 失败回滚）",
          "en": ""
        },
        {
          "zh": "「一键改 MKV」零破坏性逐行替换 basic.ini（保留注释与换行风格）",
          "en": ""
        },
        {
          "zh": "GitHub API 规范 User-Agent + 可选 token（net/github_token）+ 限流友好提示",
          "en": ""
        },
        {
          "zh": "新增 TaskRunner 线程池：磁盘测速 / 录制体检 / 日志分析移出 UI 线程；移除 processEvents 反模式",
          "en": ""
        },
        {
          "zh": "日志分析合并单遍扫描；detach 线程统一托管回收；删除 managed/ 孤儿工程 B 工程质量",
          "en": ""
        },
        {
          "zh": "TR 宏查表化：社区可通过 locales ini 增补语言无需发版（附模板提取脚本）",
          "en": ""
        },
        {
          "zh": "tools_tab.cpp 按功能拆为 6 个编译单元；引入 .clang-format / .gersemirc",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.7.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
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
