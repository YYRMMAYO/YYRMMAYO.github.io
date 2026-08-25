/* ============================================================
 * 更新记录数据 — 由 scripts/sync-changelog.py 自动生成，请勿手改
 * 重新生成：python scripts/sync-changelog.py
 * 数据来源：GitHub Releases / Tags（每个软件最近 3 个版本）
 * 生成时间：2026-08-25 11:49
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
      "version": "v2.8.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "直播 / 录制中最怕的「静默失败」从此有人盯：三层异常信号监控，出事立刻托盘强提醒——",
          "en": ""
        },
        {
          "zh": "断连告警：WebSocket 断开且当时正在录制（OBS 崩溃 / 被关闭时用户在游戏中毫无察觉）；",
          "en": ""
        },
        {
          "zh": "心跳超时：录制中连续 3 次 `GetRecordStatus` 查询失败（约 6 秒），提示 OBS 疑似假死、 卡在「正在停止录制」时不要强制关机；",
          "en": ""
        },
        {
          "zh": "重连后确认：自动重连成功后发现录制已被中断，明确告知并引导一键重启录制。",
          "en": ""
        },
        {
          "zh": "同类告警单次异常期间只弹一次；状态恢复正常自动复位。设置 →「后台与遥控」可关。",
          "en": ""
        },
        {
          "zh": "事中监控补全：后台只读尾随 `%AppData%\\obs-studio\\logs` 最新会话日志， 直播中出现掉帧、编码过载、断流、插件加载失败等特征时即时托盘提醒，不用等下播翻日志。",
          "en": ""
        },
        {
          "zh": "匹配规则与离线日志分析器同源共享（一处维护）；命中前先脱敏；仅取警告级以上。",
          "en": ""
        },
        {
          "zh": "双重防打扰：同类告警 90 秒抑制 + 每小时全局 12 条限流；自动跟随 OBS 滚动到新日志文件， 首次挂载从文件末尾开始，不重放历史。设置 →「后台与遥控」可关。",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.7.1",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": [
        {
          "zh": "告别单一紫色：设置 →「外观与无障碍」→「主题色」新增 5 套柔和配色色板，一键切换、即时生效、随配置持久化：",
          "en": ""
        },
        {
          "zh": "青瓷绿（默认）：`#157a70`，冷静专业",
          "en": ""
        },
        {
          "zh": "海盐蓝：`#3d6da0`，经典稳重",
          "en": ""
        },
        {
          "zh": "鼠尾草绿：`#4b7061`，自然温和",
          "en": ""
        },
        {
          "zh": "深海松石：`#0f766e`，沉稳内敛",
          "en": ""
        },
        {
          "zh": "雾紫（经典）：`#7b2ff7`，保留旧版情怀",
          "en": ""
        },
        {
          "zh": "每套配色含浅色 / 深色两整套色阶（基础 / 悬停 / 按下 / 柔和底 / 深变体 / 反衬文字），按钮、选中态、开关、复选框、小标等全界面统一跟随。",
          "en": ""
        },
        {
          "zh": "所有浅/深基础色与反衬文字对比度均按 WCAG AA（≥4.5:1）校准。",
          "en": ""
        }
      ]
    },
    {
      "version": "v2.7.0",
      "tagline": {
        "zh": "色彩 / 采样率 / 磁盘写入 / 编码顾问 / 推流节点五卡体检",
        "en": ""
      },
      "items": [
        {
          "zh": "A 组：浏览器告警挂件失效（widget URL 过期 / 缓存）、自定义 Dock 无法刷新、 OBS 隐性开销（隐藏来源未关停 / 重复捕获 / 浏览器源数量）、双编码 GPU 预算；",
          "en": ""
        },
        {
          "zh": "B 组：x264 与 NVENC P1~P7 预设速查、录像 CQP 恒定质量参考值 （H.264 18~20 / AV1 22）、字幕转写插件方案、推流节点实测选点；",
          "en": ""
        },
        {
          "zh": "C 组：磁盘写入速度不足导致录制卡顿（HDD / 满盘 SSD）。 所有 `related` 引用均校验为真实条目 id；随包热更新通道照常生效。",
          "en": ""
        },
        {
          "zh": "版本号 2.6.0 → 2.7.0；HeadlessTest 路由自检实测 18 路由全 PASS。",
          "en": ""
        },
        {
          "zh": "插件广场经核验已在 AI 分类收录 LocalVocal / Auto Subtitle / CleanStream / OBS Detect 四个字幕转写类精选，本版不重复扩充插件数据。",
          "en": ""
        },
        {
          "zh": "新增单元测试覆盖五个新核心 + 关键帧自检项 + 新日志规则， 全量 241 项测试通过（build 零警告零错误）。",
          "en": ""
        },
        {
          "zh": "全部新功能只读探测或独立 IO 测试：不改任何 OBS 配置与系统设置；",
          "en": ""
        },
        {
          "zh": "磁盘测速临时文件用后即删，异常路径也有 finally 兜底清理；",
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
  "obs-plugin": [
    {
      "version": "v2.7.0",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
    },
    {
      "version": "v2.6.3",
      "tagline": {
        "zh": "",
        "en": ""
      },
      "items": []
    },
    {
      "version": "v2.6.2",
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
