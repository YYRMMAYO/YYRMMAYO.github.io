/* ============================================================
 * YYRMM 的软件库 — 双语静态站
 * 修改指南：编辑下方 I18N 和 softwareList 即可，无需动其他代码。
 * ============================================================ */

/* ---------- 1. 个人介绍（在这里修改你的名字和简介） ---------- */
const PROFILE = {
  name: { zh: "YYRMMAYO", en: "YYRMMAYO" },
  bio: {
    zh: "冷过春绪，雨过天晴",
    en: "YA IS LOVELY",
  },
};

/* ---------- 2. 界面文案（站点名称等可在此修改） ---------- */
const I18N = {
  brand:         { zh: "YYRMM的软件库", en: "YYRMM's Software Library" },
  heroTitle:     { zh: "YYRMM的软件库", en: "YYRMM's Software Library" },
  heroSub:       { zh: "这里收录了我开发的软件，欢迎试用与反馈。", en: "A collection of software I've built. Try them out and share your feedback." },
  heroEyebrow:   { zh: "软件作品集", en: "Software Showcase" },
  sectionTitle:  { zh: "软件列表", en: "Software List" },
  sectionDesc:   { zh: "点击「详细介绍」可在新页面查看完整介绍；卡片按钮直达下载或项目主页。", en: "Click \"Details\" to open the full introduction in a new page; buttons link to downloads or the repo." },
  emptyState:    { zh: "暂无可展示的软件，敬请期待。", en: "No software to show yet. Stay tuned!" },
  footerName:    { zh: "YYRMM的软件库", en: "YYRMM's Software Library" },
  footerHost:    { zh: "托管于 GitHub Pages", en: "Hosted on GitHub Pages" },
  navHome:       { zh: "首页", en: "Home" },
  navProfile:    { zh: "关于我", en: "About" },
  navSoftware:   { zh: "软件列表", en: "Software" },
  btnGithub:     { zh: "GitHub 下载", en: "GitHub Download" },
  btnNetdisk:    { zh: "网盘下载", en: "Netdisk Download" },
  pwdLabel:      { zh: "密码", en: "Password" },
  btnWebsite:    { zh: "主页", en: "Website" },
  btnShow:       { zh: "详细介绍", en: "Details" },
  badgeStopped:  { zh: "停止开发", en: "Discontinued" },
  introEyebrow:  { zh: "卷首语", en: "Preface" },
  introTitle:    { zh: "关于本项目", en: "About This Project" },
  navResources:   { zh: "资料", en: "Resources" },
  resTitle:       { zh: "资料下载", en: "Resource Downloads" },
  resDesc:        { zh: "以下资料均由 AI 协助整理与编写，统一存放在云盘；点击「网盘下载」并输入密码即可获取。所有资料均免费发布，不含任何收费项，内容仅供参考、会持续修订。", en: "All materials below were organized and written with the help of AI and are stored on a cloud drive — click \"Netdisk Download\" and enter the password to get them. They are released free of charge with no paid items, for reference only, and keep being revised." },
  resFree:        { zh: "免费发布 · 不含收费项", en: "Free · no paid items" },
  resEmptyState:  { zh: "资料整理中，敬请期待。", en: "Materials are being prepared. Stay tuned!" },
  resFeedbackEyebrow: { zh: "问题反馈", en: "Feedback" },
  resFeedbackText:    { zh: "资料有误、缺漏，或者想补充新的资料？欢迎填写反馈表告诉我。", en: "Found a mistake or a gap, or want to suggest new material? Tell me through the feedback form." },
  resFeedbackBtn:     { zh: "各资料的问题反馈", en: "Report an Issue" },

  /* ---------- 改版新增文案（Hero / 统计 / 特性 / 预览 / 页脚） ---------- */
  navFeatures:   { zh: "特性", en: "Features" },
  heroBadge:     { zh: "个人作品集 · 开源发布", en: "Personal portfolio · openly released" },
  heroNote:      { zh: "纯静态，部署在 GitHub Pages；没有框架，也没有第三方库。", en: "Fully static on GitHub Pages — no framework, no third-party libraries." },
  ctaBrowse:     { zh: "浏览软件", en: "Browse software" },
  ctaAbout:      { zh: "关于我", en: "About me" },

  featEyebrow:   { zh: "共性", en: "Common ground" },
  featTitle:     { zh: "这些软件的共同点", en: "What these projects have in common" },
  featDesc:      { zh: "不管是排障工具、资源库还是小游戏，做法都差不多：能离线就别联网、源码放出来给人看、更新只下改动的那几个文件、中英文和深浅主题都备齐。", en: "Whether it's a troubleshooting tool, a resource library or a small game, the approach is much the same: stay offline where possible, keep the source out in the open, download only the files that changed, and cover both languages and both themes." },

  swEyebrow:     { zh: "作品集", en: "Portfolio" },
  resEyebrow:    { zh: "资源", en: "Resources" },

  previewTitle:      { zh: "YYRMM 软件库 — 总览", en: "YYRMM Software Library — Overview" },
  previewRailAll:    { zh: "全部软件", en: "All software" },
  previewRailObs:    { zh: "OBS 系列", en: "OBS family" },
  previewRailRes:    { zh: "资料", en: "Resources" },
  previewRailAbout:  { zh: "关于", en: "About" },
  previewStatusCount:{ zh: "个作品 · 中英双语", en: "projects · bilingual" },
  figHero:           { zh: "界面示意 — 条目直接读自下方软件列表", en: "Interface mockup — the entries are read straight from the software list below" },

  footTagline:     { zh: "个人软件作品集 · 纯静态 · 中英双语 · 深浅双主题", en: "A personal software portfolio · static · bilingual · dual themes" },
  footColSoftware: { zh: "软件", en: "Software" },
  footColResources:{ zh: "资料", en: "Resources" },
  footColContact:  { zh: "开源", en: "Open source" },
  footLinkList:    { zh: "全部软件", en: "All software" },
  footLinkObs:     { zh: "OBS帮助助手", en: "OBS Helper" },
  footLinkAi:      { zh: "AIStudioHub", en: "AIStudioHub" },
  footLinkLove:    { zh: "第101种理由", en: "Love 101" },
  footLinkXuxin:   { zh: "绪心桌宠", en: "Xuxin Desktop Pet" },
  footLinkHelp:    { zh: "HelpDesk 电脑助手", en: "HelpDesk PC Helper" },
  footLinkRes:     { zh: "资料下载", en: "Downloads" },
  footLinkShared:  { zh: "学习资料共享", en: "Shared study materials" },
  footLinkSharedPwd:{ zh: "网盘密码：yykwy05", en: "Password: yykwy05" },
  footLinkFeedback:{ zh: "问题反馈", en: "Feedback" },
  footLinkBili:    { zh: "Bilibili 主页", en: "Bilibili" },
  footLinkGithub:  { zh: "GitHub 仓库", en: "GitHub repos" },
  footLinkRelease: { zh: "下载与发布", en: "Downloads & releases" },
  footLinkSite:    { zh: "站点源码", en: "Site source" },
};

/* ---------- 3. 软件数据（已从 GitHub 仓库整理，SC01 已按要求排除） ----------
 * 字段说明：
 *   icon   卡片缩略图上的大图标（emoji 或文字，或换成真实截图）
 *   name   软件名称 { zh, en }
 *   desc   软件简介 { zh, en }
 *   version    版本号（同时用于卡片徽章与 SEO 结构化数据）
 *   versionAlt 同版本的另一条发布通道（可选，如 OBS 帮助助手的 X 系列），
 *              只在卡片上以「主版本 / 另一通道」并列显示，不进结构化数据
 *   tags   标签，可写字符串（中英相同）或 { zh, en }
 *   links  download 填该软件 GitHub 仓库详情页地址（点击"GitHub 下载"跳转过去下载）；
 *          netdisk 填网盘分享地址 { url, pwd }，pwd 为访问密码；不填则不显示"网盘下载"按钮
 *          website 可填官网等其他页面；不需要的项留空 "" 对应按钮自动隐藏
 *   accent 卡片主题色（十六进制）
 * 添加新软件：复制任意一个 { ... }, 条目，替换内容即可。
 * -------------------------------------------------------- */
const softwareList = [
  {
    key: "love101",
    icon: "💘",
    name: { zh: "第101种理由", en: "Love 101" },
    version: "v1.0.0",
    os: "Android, Windows, Web",
    license: "MIT",
    desc: {
      zh: "数据驱动的 2.5D 恋爱叙事游戏：剧情改编自 9 段爱情故事，AI 生成立绘，部分场景以 CSS 3D 做半立体叙述。点击推进剧情、双选项互动、进度自动保存，完全离线可玩，支持安卓 / Windows / 浏览器。",
      en: "A data-driven 2.5D romance narrative game adapted from 9 love stories, featuring AI-generated art and CSS 3D semi-stereoscopic scenes. Tap to advance the story, choose between two options, auto-save your progress — fully offline, playable on Android / Windows / browser.",
    },
    features: {
      tagline: { zh: "一个关于爱的 2.5D 叙事游戏", en: "A 2.5D narrative game about love" },
      items: [
        { zh: "9 段爱情故事改编剧情", en: "9 adapted love stories" },
        { zh: "AI 生成立绘 + CSS 3D 半立体场景", en: "AI art + CSS 3D semi-stereoscopic scenes" },
        { zh: "点击推进 · 双选项互动", en: "Tap to advance, two-choice interactions" },
        { zh: "进度自动保存，完全离线可玩", en: "Auto-saved progress, fully offline" },
        { zh: "支持安卓 / Windows / 浏览器", en: "Playable on Android / Windows / browser" },
      ],
    },
    tags: ["Windows", "Android", { zh: "叙事游戏", en: "Narrative Game" }],
    links: {
      download: "https://github.com/YYRMMAYO/love101/releases/tag/v1.0.0",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d75y5fc", pwd: "00" },
      website: "https://github.com/YYRMMAYO/love101",
    },
    accent: "#b03a48",
  },
  {
    key: "aistudio",
    icon: "🎨",
    name: { zh: "AIStudioHub", en: "AIStudioHub" },
    version: "v1.9.0",
    os: "Windows",
    license: "MIT",
    desc: {
      zh: "AI 制作资源整合中心：汇集 181 个主流 AI 平台与开源工具（视频制作、图像生成、音乐音频、网页制作、文本大模型），内置离线中文教程与 AI Agent / Skill 专区，支持模糊搜索、收藏与个性化主题。",
      en: "An AI production resource hub: 181 mainstream AI platforms & open-source tools (video, image, music, web, LLM), offline Chinese tutorials, and an AI Agent / Skills section — with fuzzy search, favorites and themes.",
    },
    features: {
      tagline: { zh: "AI 制作资源整合中心", en: "AI production resource hub" },
      items: [
        { zh: "汇集 181 个主流 AI 平台与开源工具", en: "181 mainstream AI platforms & open-source tools" },
        { zh: "视频、图像、音乐、网页、文本大模型五大分类", en: "Video, image, music, web & LLM categories" },
        { zh: "内置离线中文教程库", en: "Offline Chinese tutorial library" },
        { zh: "AI Agent / Skill 专区", en: "AI Agent / Skills section" },
        { zh: "模糊搜索 + 一键收藏", en: "Fuzzy search + favorites" },
        { zh: "多套个性化主题", en: "Personalizable themes" },
      ],
    },
    tags: ["Windows", { zh: "AI 资源库", en: "AI Resources" }, { zh: "开源", en: "Open Source" }],
    links: {
      download: "https://github.com/YYRMMAYO/AIStudioHub",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d75a4yb", pwd: "YYKWY" },
      website: "",
    },
    accent: "#9c7c1e",
  },
  {
    key: "obs",
    icon: "🎥",
    name: { zh: "OBS帮助助手（Windows）", en: "OBS Helper (Windows)" },
    version: "V3.5.3",
    versionAlt: "X1031Y3",
    os: "Windows 10 / 11，另有 Windows 7 SP1 兼容构建",
    license: "MIT",
    desc: {
      zh: "面向直播新手的 OBS Studio 排障与直播助手：208 条离线知识库、一键体检与日志分析、简单录像与一键开录、远程控制台与提词器；V3.3 起又长成一套直播工作台 —— 虚拟直播（Live2D + 10 套直播间模板 + 16 个平台开播引导）、手机联动（扫码遥控 / 监看 / 提词 / 当 Wi-Fi 摄像头）、弹幕聚合、本地实时字幕、复盘切片与多平台转推。最新 V3.5.3 / X1031Y3 把精选插件与开源依赖做成应用内一键配置。主构建面向 Windows 10 / 11，另有 Windows 7 SP1 兼容构建；纯离线可用。",
      en: "An OBS Studio troubleshooting and streaming assistant for beginners: a 208-entry offline knowledge base, one-click health checks and log analysis, simple recording with one-press start, a remote console and a teleprompter. Since V3.3 it has grown into a full streaming workbench — virtual streaming (Live2D plus 10 room templates and 16 platform guides), phone link (scan to control, monitor, prompt, or use the phone as a Wi-Fi camera), chat aggregation, local live captions, review/clipping and multi-platform relay. The latest V3.5.3 / X1031Y3 adds in-app one-click setup for curated plugins and open-source dependencies. The main build targets Windows 10 / 11, with a separate Windows 7 SP1 compatible build — fully offline.",
    },
    features: {
      tagline: { zh: "从排障到开播的一整套直播工作台", en: "From troubleshooting to going live" },
      items: [
        { zh: "208 条问题知识库，完全离线；知识库与插件目录都能单独热更新，不必等发版", en: "208-entry offline knowledge base; the KB and plugin catalog hot-update on their own, without waiting for a release" },
        { zh: "一键体检 + 离线日志分析：34 条规则 + 5 条派生判定 + 3 项量化比值（共 42 条线索），分析前先脱敏", en: "One-click health check plus offline log analysis: 34 rules, 5 derived verdicts and 3 quantitative ratios (42 leads in total), sanitised before analysis" },
        { zh: "插件一键配置（V3.5.3）：卡片或粘贴 owner/repo 直接查最新 Release → 下载 → SHA-256 校验 → 安全解压安装", en: "One-click plugin setup (V3.5.3): use a card or paste owner/repo to find the latest release, download, verify SHA-256, unpack and install" },
        { zh: "开源依赖一键配置（V3.5.3）：FFmpeg / rclone / whisper / MediaMTX 应用内下载校验并自动填好路径", en: "One-click dependency setup (V3.5.3): FFmpeg / rclone / whisper / MediaMTX download, verify and wire themselves into the app" },
        { zh: "本机插件管理（V3.5.3）：卸载只移进备份目录不硬删，支持用户级 ⇄ 全局级迁移与接管", en: "Local plugin management (V3.5.3): uninstall moves into a backup folder instead of deleting, with user-level ⇄ global migration and takeover" },
        { zh: "手机联动（V3.4.0）：扫码遥控 / 监看 / 提词 / 补光 / 快传，手机还能当 Wi-Fi 摄像头与麦克风", en: "Phone link (V3.4.0): scan to control, monitor, prompt, light and transfer files — and use the phone as a Wi-Fi camera or microphone" },
        { zh: "虚拟直播（V3.3.0）：Live2D 一键配置 + 10 套直播间模板 + 16 个平台开播引导", en: "Virtual streaming (V3.3.0): one-click Live2D setup, 10 room templates and guides for 16 streaming platforms" },
        { zh: "弹幕聚合、本地实时字幕（whisper.cpp）、复盘切片、多平台转推与 rclone 归档（V3.4.0）", en: "Chat aggregation, local live captions (whisper.cpp), review and clipping, multi-platform relay and rclone archiving (V3.4.0)" },
        { zh: "提词器：工具栏 / 拖动 / 滚轮 / 键盘四条手动上下移动（V3.1.1），支持镜像、点击穿透、手机远程改稿", en: "Teleprompter: four ways to scroll by hand — toolbar, drag, wheel, keyboard (V3.1.1) — plus mirroring, click-through and phone-side script editing" },
        { zh: "简单录像与一键开录：三档预设一键配好并开录，OBS 没开也能拉起；回放缓存一键存片", en: "Simple recording: three presets configure and start in one press, even launching OBS when it's closed; one-click replay-buffer saving" },
        { zh: "状态可信度与下载链路修复（V3.5.2 / V3.5.3）：停止录制不再显示「录制中」，插件与依赖下载恢复", en: "Trustworthy state and working downloads (V3.5.2 / V3.5.3): stopping a recording no longer leaves it showing as active, and plugin/dependency downloads work again" },
        { zh: "数据安全与隐私：写文件走事务通道（快照 + 原子替换 + 读回校验 + 回滚），机密双层加密（AES-256-GCM + DPAPI）", en: "Data safety and privacy: file writes go through one transaction channel (snapshot, atomic replace, read-back verify, rollback); secrets are double-encrypted (AES-256-GCM + DPAPI)" },
        { zh: "零 NuGet、无 WebView2 的原生 WPF；1809 项单元测试全绿，中英双语 3388 条文案键", en: "Native WPF with no NuGet and no WebView2; 1809 unit tests passing and 3388 bilingual string keys" },
      ],
    },
    tags: ["Windows 10 / 11", { zh: "V3.5.3 / X1031Y3", en: "V3.5.3 / X1031Y3" }, { zh: "OBS 排障", en: "OBS Troubleshooting" }, { zh: "免费", en: "Free" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS_Helper/releases/latest",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d7578be", pwd: "YYKWY" },
      website: "",
    },
    accent: "#a63a2b",
  },
  {
    key: "obs-mac",
    icon: "🍎",
    name: { zh: "OBS 排障助手（macOS）", en: "OBS Helper (macOS)" },
    version: "v2.1.0",
    os: "macOS",
    license: "MIT",
    desc: {
      zh: "OBS 直播排障助手 macOS 版：离线知识库、智能诊断、OBS 远程控制台、系统实时监控与场景模板，帮你快速解决黑屏、卡顿、音画不同步等直播问题。",
      en: "OBS troubleshooting assistant for macOS: offline knowledge base, smart diagnosis, OBS remote console, live system monitoring and scene templates — helps fix black screen, lag and A/V sync issues.",
    },
    tags: ["macOS", { zh: "OBS 排障", en: "OBS Troubleshooting" }, { zh: "开源", en: "Open Source" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS-Helpmac",
      website: "",
    },
    accent: "#8b5a2b",
  },
  {
    key: "obs-plugin",
    icon: "🔌",
    name: { zh: "OBS 排障助手 · 插件版", en: "OBS Helper Plugin" },
    version: "v2.9.0",
    os: "Windows",
    license: "MIT",
    desc: {
      zh: "纯原生 C++ / Qt6 的 OBS Studio 前端插件：以停靠面板直接嵌入 OBS 主窗口，七大专栏覆盖体检、日志分析、设置体检、性能监控、插件管理、工具箱与系统信息，全程只读检测、零额外进程。v2.9.0 适配 OBS Studio 33（新的「一插件一目录」插件布局 + Qt 6.11.1 依赖）。",
      en: "A native C++ / Qt6 front-end plugin for OBS Studio: embeds a dock panel right inside the main window with seven tabs — health check, log analysis, settings audit, performance monitor, plugin manager, toolbox and system info. Read-only, zero extra processes. v2.9.0 adds OBS Studio 33 support (the new one-folder-per-plugin layout plus the Qt 6.11.1 runtime).",
    },
    features: {
      tagline: { zh: "嵌进 OBS 的直播体检台", en: "A checkup desk inside OBS" },
      items: [
        { zh: "停靠面板嵌入 OBS 主窗口，无需 .NET 运行库", en: "Dock panel in OBS, no .NET runtime needed" },
        { zh: "适配 OBS Studio 33：新插件布局与 Qt 6.11.1 依赖（v2.9.0）", en: "Ready for OBS Studio 33: new plugin layout and Qt 6.11.1 runtime (v2.9.0)" },
        { zh: "本地离线解析日志，对齐官方 Log Analyzer 规则", en: "Offline log analysis aligned with official rules" },
        { zh: "「元凶插件」一键禁用，崩溃转储定位崩溃模块", en: "One-click disable of culprit plugins; crash dump parsing" },
        { zh: "性能监控：帧耗时 / GPU 占用 / 丢帧实时告警", en: "Perf monitor: frame time, GPU usage, drop alerts" },
        { zh: "录制路径预检 + 损坏录制件扫描 + 开播一键自检", en: "Record path pre-check, corrupt file scan, pre-flight self-check" },
        { zh: "诊断报告一键导出，推流密钥自动脱敏", en: "One-click report export, stream key sanitized" },
      ],
    },
    tags: ["Windows x64", "OBS 30.x–33.x", "v2.9.0", { zh: "开源", en: "Open Source" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS_Helper_Plugin/releases",
      website: "https://github.com/YYRMMAYO/OBS_Helper_Plugin",
    },
    accent: "#3d5a56",
  },
  {
    key: "xuxin",
    icon: "🎀",
    name: { zh: "绪心桌宠", en: "Xuxin Desktop Pet" },
    version: "v1.4.0",
    os: "Android 8.0+",
    license: "MIT",
    desc: {
      zh: "安卓悬浮窗桌宠：初音未来 / 洛天依 / 乐正绫三套角色全部由 Canvas 程序化建模 + 骨骼动画逐像素绘制，不依赖 Live2D 与 3D 模型，APK 约 3.6 MB。待机 / 行走 / 拖拽 / 开心 / 困倦五态动画，点击投喂、离线 TTS 语音、心情与饱食度养成、久坐喝水提醒、陪伴统计与桌面小组件；V1.4.0 专治长时间挂机的耗电、统计恒为 0 与提醒不响。",
      en: "An Android hover-window desktop pet: three characters (Hatsune Miku, Luo Tianyi and Yue Zhengling) are drawn pixel by pixel with Canvas procedural modelling and skeleton animation — no Live2D, no 3D models, and a ~3.6 MB APK. Five animation states (idle, walk, drag, happy, sleepy), tap-to-feed, offline TTS, mood and hunger systems, sit/water reminders, companionship stats and a home-screen widget; V1.4.0 targets idle battery drain, stats that stayed at zero and reminders that never rang.",
    },
    features: {
      tagline: { zh: "程序化建模的安卓桌宠", en: "A procedurally drawn Android desktop pet" },
      items: [
        { zh: "三套角色（初音未来 / 洛天依 / 乐正绫）全部代码逐像素绘制，不依赖 Live2D 与 3D 模型", en: "Three characters drawn pixel by pixel in code — no Live2D, no 3D models" },
        { zh: "骨骼动画状态机：待机呼吸 / 行走迈步 / 拖拽悬垂 / 开心弹跳 / 困倦闭眼", en: "Skeleton animation states: idle breathing, walking, dangling when dragged, happy bounce, sleepy eyes" },
        { zh: "陪伴互动：点击与投喂反馈、双击爱心爆发、按时段问候、离线 TTS 说话", en: "Interaction: tap and feed feedback, double-tap heart burst, time-of-day greetings, offline TTS voice" },
        { zh: "心情与饱食度养成，数据持久化并跨重启累计；久坐 / 喝水提醒走独立高优先级通知通道", en: "Mood and hunger systems persisted across restarts; sit/water reminders use their own high-priority channel" },
        { zh: "悬浮窗贴边、长按菜单换形象、陪伴小窗与桌面小组件（心情 / 饱食 / 今日陪伴）", en: "Edge-snapping overlay, long-press menu to swap characters, a companion mini window and home-screen widgets" },
        { zh: "省电渲染（V1.4.0）：动画出帧上限 60fps，熄屏或窗口不可见时暂停自刷新", en: "Battery-friendly rendering (V1.4.0): 60 fps frame cap, self-refresh paused when the screen is off or the window is hidden" },
        { zh: "内置数据 JSON 备份 / 恢复（带类型校验），release 启用 R8 混淆与正式签名", en: "JSON backup and restore with type validation; release builds use R8 shrinking and a real signing key" },
      ],
    },
    tags: ["Android", { zh: "桌宠", en: "Desktop Pet" }, { zh: "程序化建模", en: "Procedural Art" }, "MIT"],
    links: {
      download: "https://github.com/YYRMMAYO/xuxin-desktop-pet",
      website: "",
    },
    accent: "#2f6f74",
  },
  {
    key: "helpdesk",
    icon: "🛠️",
    name: { zh: "HelpDesk 电脑助手", en: "HelpDesk PC Helper" },
    version: "v1.1.0",
    os: "Windows 10 / 11",
    desc: {
      zh: "面向不太懂电脑的 Windows 用户的插件式电脑助手：主程序只保留一套薄外壳，网速检测、软件卸载、系统诊断、系统清理与故障排除指南都做成独立插件，从 GitHub 在线发现、下载、校验后加载，用户需要哪个装哪个。WPF / .NET 8 自包含发布，装到用户目录、全程不弹 UAC。",
      en: "A plugin-based PC helper for Windows users who aren't computer experts: the host stays a thin shell while speed testing, app uninstalling, system diagnostics, cleanup and a troubleshooting guide all ship as separate plugins, discovered, downloaded and verified from GitHub on demand. Self-contained WPF / .NET 8, installed per-user with no UAC prompt.",
    },
    features: {
      tagline: { zh: "需要哪个插件就装哪个", en: "Install only the plugins you need" },
      items: [
        { zh: "插件式架构：主程序只留外壳，功能按插件从 GitHub 在线发现 / 下载 / 校验 / 加载", en: "Plugin architecture: a thin host, with features discovered, downloaded, verified and loaded from GitHub" },
        { zh: "网络工具：网速检测（下行 / 上行 / 延迟 / 抖动，多节点自动选择）、网卡信息、DNS 解析与 Ping", en: "Network toolkit: speed test (down/up, latency, jitter, automatic node choice), adapter info, DNS lookup and ping" },
        { zh: "软件卸载：调用注册表登记的官方卸载程序，卸载后按注册表记录的安装目录清理残留", en: "App uninstaller: runs the registered official uninstaller, then cleans leftovers from the recorded install directory" },
        { zh: "系统诊断：CPU / 内存 / 磁盘实时状态与健康评分", en: "System diagnostics: live CPU / memory / disk status with a health score" },
        { zh: "系统清理与故障排除指南：清理当前账户临时文件，内置 15 类常见电脑故障的排查步骤", en: "Cleanup plus a troubleshooting guide: clears the current account's temp files and ships step-by-step fixes for 15 common problems" },
        { zh: "插件分发链路（v1.1.0）：按提交号取内容并做校验，彻底消除 CDN 缓存导致「索引新、文件旧」", en: "Plugin distribution (v1.1.0): content is fetched by commit hash and verified, eliminating the stale-CDN \"new index, old file\" problem" },
        { zh: "Inno Setup 6 安装包，装到用户目录、全程不弹 UAC；自包含发布，无需另装 .NET 运行时", en: "Inno Setup 6 installer into the user directory with no UAC prompt; self-contained, so no .NET runtime install is needed" },
      ],
    },
    tags: ["Windows 10 / 11", { zh: "插件式", en: "Plugin-based" }, { zh: "电脑助手", en: "PC Helper" }, ".NET 8"],
    links: {
      download: "https://github.com/YYRMMAYO/HelpDesk/releases",
      website: "https://github.com/YYRMMAYO/HelpDesk",
    },
    accent: "#3f5b8a",
  },
  {
    key: "cookiesluncher",
    icon: "🍪",
    name: { zh: "CookieLuncher · Cookie 启动器", en: "CookieLuncher" },
    version: "v1.0.0",
    os: "Windows",
    desc: {
      zh: "本地运行的中文命令行小工具：把各网站的登录 Cookie 加密保存在本机单个 cookies.enc 里（明文永不落盘），需要时一键注入浏览器打开网站，也可以手动登录后采集 Cookie，并导出成 GitHub Action 保活项目能直接用的密文配置。支持内置 Thorium 与本机 Edge / Chrome 两种浏览器后端。",
      en: "A small local Chinese-language CLI: it keeps per-site login cookies encrypted in a single cookies.enc (plaintext never touches disk), injects them into a browser on demand, captures cookies from a manual login, and exports an encrypted config that a GitHub Action keep-alive project can use directly. Two browser backends: bundled Thorium or your local Edge / Chrome.",
    },
    features: {
      tagline: { zh: "登录状态加密保存在本机", en: "Login state, encrypted on your machine" },
      items: [
        { zh: "多网站 Cookie 加密存进单个 cookies.enc，密码错误无法解密，明文不落盘", en: "Per-site cookies encrypted into one cookies.enc — wrong password never decrypts, and plaintext never hits disk" },
        { zh: "一键启动浏览器：创建临时用户目录注入 Cookie 后拉起浏览器，关闭后自动清理临时数据", en: "One-click launch: a temp profile gets the cookies, the browser opens, and the temp data is cleaned up on exit" },
        { zh: "手动登录采集：打开可见浏览器登录账号 / 验证码，回车后自动采集全部有效 Cookie", en: "Manual capture: log in (or pass a captcha) in a visible browser, press Enter and all valid cookies are collected" },
        { zh: "Cookie 管理：粘贴导入（分号 / JSON / Cookie-Editor 格式）、查看、删除与修改密码（整体重新加密）", en: "Cookie management: paste-import (semicolon / JSON / Cookie-Editor formats), view, delete and change password (re-encrypts everything)" },
        { zh: "导出 GitHub Action 保活配置：只含密文的 action_config_output.json + Fernet 密钥，主菜单导出还带二重密码保护", en: "Export a GitHub Action keep-alive config: a ciphertext-only action_config_output.json plus the Fernet key, with a second export password from the menu" },
        { zh: "双浏览器后端：内置 Thorium（离线自包含，自带 H.264 / AAC 可放 B 站视频）或本机 Edge / Chrome（DRM 会员视频）", en: "Two browser backends: bundled Thorium (offline, with H.264 / AAC for Bilibili video) or local Edge / Chrome for DRM member content" },
      ],
    },
    tags: [{ zh: "命令行", en: "CLI" }, "Python 3.10+", { zh: "Cookie 管理", en: "Cookie Manager" }, "Windows"],
    links: {
      download: "https://github.com/YYRMMAYO/CookiesLuncher",
      website: "",
    },
    accent: "#7a5b3a",
  },
  {
    key: "sinan",
    icon: "🧰",
    name: { zh: "司南工具箱", en: "Sinan Toolbox" },
    version: "v6.1.0",
    os: "Windows",
    license: "MIT",
    status: "discontinued",
    desc: {
      zh: "完全免费、非盈利的 Windows 辅助工具：专注系统检测、清理优化、网络诊断与故障排查，本地运行、操作安全，内置 AI 助手与多套个性化主题。",
      en: "A completely free, non-profit Windows utility focused on system detection, cleanup & optimization, network diagnostics and troubleshooting — runs locally, safe to use, with an AI assistant and multiple themes.",
    },
    features: {
      tagline: { zh: "你的 Windows 全能工具箱", en: "Your all-in-one Windows toolbox" },
      items: [
        { zh: "系统检测：硬件与系统信息一目了然", en: "System detection: hardware & OS info at a glance" },
        { zh: "清理优化：垃圾清理 + 开机加速", en: "Cleanup & optimization + faster boot" },
        { zh: "网络诊断：网络故障检测与修复", en: "Network diagnostics & repair" },
        { zh: "故障排查工具集", en: "Troubleshooting toolkit" },
        { zh: "内置 AI 助手", en: "Built-in AI assistant" },
        { zh: "多套主题，完全免费", en: "Multiple themes, 100% free" },
      ],
    },
    tags: ["Windows", { zh: "系统工具", en: "System Utility" }, { zh: "免费", en: "Free" }],
    links: {
      download: "https://github.com/YYRMMAYO/WINhelper",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d71xtzg", pwd: "YYRMM" },
      website: "",
    },
    accent: "#4a6b52",
  },
];

/* ---------- 4. 资料数据（首页「资料下载」板块） ----------
 * 字段说明（与软件卡片基本一致）：
 *   icon   资料卡片缩略图上的大图标（emoji 或文字）
 *   name   资料名称 { zh, en }
 *   desc   资料简介 { zh, en }
 *   meta   卡片底部一行小字（份数 / 体积等），可留空
 *   tags   标签，可写字符串（中英相同）或 { zh, en }
 *   links  资料统一放云盘：netdisk 填云盘分享地址 { url, pwd }（pwd 为访问密码）；
 *          资料没有独立详情页，卡片缩略图 / 标题点击即进入该云盘链接
 *   accent 卡片主题色（十六进制）
 * 添加新资料：复制任意一个 { ... }, 条目，替换内容即可。
 * -------------------------------------------------------- */
const resourceList = [
  {
    icon: "📚",
    name: { zh: "高中理科资料合集", en: "Senior-High Science Study Pack" },
    desc: {
      zh: "由 AI 协助整理与编写的高中理科学习资料：物理 / 化学 / 生物 / 数学预习资料、高中数学快捷公式与扩展方法汇总集，以及高中理科测试题库。",
      en: "Study materials for senior-high science organized and written with the help of AI: preview notes for physics, chemistry, biology and maths, a summary of maths shortcut formulas & extended methods, and a science test bank.",
    },
    meta: { zh: "共 7 份文档 · 约 63 MB · AI 整理与编写", en: "7 documents · about 63 MB · organized & written with AI" },
    tags: [{ zh: "AI 整理与编写", en: "AI-organized" }, { zh: "高中理科", en: "Science" }, "Word / .docx", { zh: "云盘下载", en: "Cloud Drive" }],
    links: {
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d79bn7i", pwd: "XY" },
    },
    accent: "#3e5c57",
  },
];

/* ---------- 5. 数据统计条（首页 Hero 下方） ----------
 * 只放真实数字，来源：softwareList 收录数 / 各软件详情页与 README 中已公布的数据。
 * 改动数字时请同步核对对应软件详情页，避免出现自相矛盾。
 * -------------------------------------------------------- */
const STATS = [
  { value: "9",   label: { zh: "个收录作品",     en: "projects listed" } },
  { value: "208", label: { zh: "条排障知识库",   en: "troubleshooting entries" } },
  { value: "1809",label: { zh: "项单元测试",     en: "unit tests" } },
  { value: "57",  label: { zh: "个精选插件",     en: "curated plugins" } },
];

/* ---------- 6. 特性（编号分段：01 / 02 / 03 …） ---------- */
const FEATURES = [
  {
    title: { zh: "能离线就不联网", en: "Offline by default" },
    desc: {
      zh: "问题知识库、日志规则和诊断引擎都随程序装在本机，断网也能查、也能体检；只有你主动发起诊断时才需要网络。",
      en: "The knowledge base, log rules and diagnosis engine ship inside the app, so searching and health checks work with no network — the connection is only needed when you start a diagnosis yourself.",
    },
  },
  {
    title: { zh: "源码放在明面上", en: "Source stays public" },
    desc: {
      zh: "代码、许可证和每次更新的条目都公开可查，页面上写的版本号就是仓库里发布过的那个版本。",
      en: "Code, licences and every changelog entry are public, and the version number on these pages is the one actually released in the repository.",
    },
  },
  {
    title: { zh: "更新只下改动", en: "Updates download only what changed" },
    desc: {
      zh: "新版本按文件比对，只取变动的那几个，逐个校验 SHA-256；万一对不上就退回整包，你的设置和数据不受影响。",
      en: "A new version is diffed file by file, only the changed ones are fetched, and each is verified with SHA-256. If something doesn't match it falls back to the full package, leaving your settings and data alone.",
    },
  },
  {
    title: { zh: "中英文 · 深浅色", en: "Two languages, two themes" },
    desc: {
      zh: "右上角切换中英文，页面和详情页一起换；浅色和深色各备一套，选过的会记住，手机上也是同一套完整界面。",
      en: "Switch language from the top right and the detail pages follow along. Light and dark each have their own palette, your choice is remembered, and the phone gets the same complete UI.",
    },
  },
];

/* ============================================================
 * 以下为逻辑代码，一般无需修改
 * ============================================================ */

let lang = localStorage.getItem("site-lang") || ((navigator.language || "zh").startsWith("zh") ? "zh" : "en");

function t(key) {
  return I18N[key] ? I18N[key][lang] : key;
}

function renderTags(tags) {
  return tags
    .map((tag) => {
      const label = typeof tag === "string" ? tag : tag[lang];
      return `<span class="tag">${label}</span>`;
    })
    .join("");
}

function renderLinks(links) {
  const github = links.download
    ? `<a class="btn btn-primary" href="${links.download}" target="_blank" rel="noopener">${t("btnGithub")}</a>`
    : "";
  const netdisk = links.netdisk && links.netdisk.url
    ? `<span class="netdisk-block"><a class="btn btn-ghost" href="${links.netdisk.url}" target="_blank" rel="noopener">${t("btnNetdisk")}</a>${
        links.netdisk.pwd
          ? `<span class="netdisk-pwd">${t("pwdLabel")}${lang === "zh" ? "：" : ": "}${links.netdisk.pwd}</span>`
          : ""
      }</span>`
    : "";
  const website = links.website
    ? `<a class="btn btn-ghost" href="${links.website}" target="_blank" rel="noopener">${t("btnWebsite")}</a>`
    : "";
  return github + netdisk + website;
}

function renderCards() {
  const grid = document.getElementById("software-grid");
  const empty = document.getElementById("empty-state");
  if (!softwareList.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.innerHTML = softwareList
    .map(
      (s) => `
      <article class="card${s.status === "discontinued" ? " is-discontinued" : ""}" data-reveal style="--card-accent:${s.accent}">
        <div class="card-thumb" data-detail="${s.key}" title="${t("btnShow")}"><span class="card-icon">${s.icon}</span>${
          s.status === "discontinued" ? `<span class="stamp-badge">${t("badgeStopped")}</span>` : ""
        }</div>
        <div class="card-body">
          <h3 class="card-title" data-detail="${s.key}">${s.name[lang]}${
            s.version ? ` <span class="card-version">${s.version}${s.versionAlt ? ` / ${s.versionAlt}` : ""}</span>` : ""
          }${s.status === "discontinued" ? `<span class="title-stamp">${t("badgeStopped")}</span>` : ""}</h3>
          <p class="card-desc">${s.desc[lang]}</p>
          <div class="card-tags">${renderTags(s.tags)}</div>
          <div class="card-links">${renderLinks(s.links)}<a class="btn btn-show" href="detail/${s.key}.html" target="_blank" rel="noopener">${t("btnShow")}</a></div>
        </div>
      </article>`
    )
    .join("");
}

function renderResourceCards() {
  const grid = document.getElementById("resource-grid");
  if (!grid) return;
  const empty = document.getElementById("resource-empty-state");
  if (empty) empty.hidden = resourceList.length > 0;
  grid.innerHTML = resourceList
    .map((r) => {
      const links = r.links || {};
      const nd = links.netdisk && links.netdisk.url ? links.netdisk : null;
      const url = nd ? nd.url : "";
      // 资料没有独立详情页：缩略图与标题直接指向云盘链接
      const thumb = url
        ? `<a class="card-thumb-link" href="${url}" target="_blank" rel="noopener" aria-label="${r.name[lang]}"><span class="card-icon">${r.icon}</span></a>`
        : `<span class="card-icon">${r.icon}</span>`;
      const title = url
        ? `<a href="${url}" target="_blank" rel="noopener">${r.name[lang]}</a>`
        : r.name[lang];
      // 云盘下载按钮取主动作样式；密码单列一行做得醒目，并附「免费发布」声明
      const netdiskBtn = nd
        ? `<a class="btn btn-primary" href="${nd.url}" target="_blank" rel="noopener">${t("btnNetdisk")}</a>`
        : "";
      const note = nd
        ? `<div class="res-dl-note">${
            nd.pwd
              ? `<span class="res-pwd"><span class="res-pwd-label">${t("pwdLabel")}${
                  lang === "zh" ? "：" : ": "
                }</span><b class="res-pwd-value">${nd.pwd}</b></span>`
              : ""
          }<span class="res-free"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>${t("resFree")}</span></div>`
        : "";
      return `
      <article class="card" data-reveal style="--card-accent:${r.accent}">
        <div class="card-thumb">${thumb}</div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${r.desc[lang]}</p>
          ${r.meta ? `<p class="card-meta">${r.meta[lang]}</p>` : ""}
          <div class="card-tags">${renderTags(r.tags)}</div>
          <div class="card-links">${netdiskBtn}${renderLinks({
        download: links.download,
        website: links.website,
      })}</div>
          ${note}
        </div>
      </article>`;
    })
    .join("");
}

/* ---------- 首页：数据统计条 ---------- */
function renderStats() {
  const grid = document.getElementById("stat-grid");
  if (!grid) return;
  grid.innerHTML = STATS.map(
    (s) => `<div class="stat">
        <span class="stat-num">${s.value}</span>
        <span class="stat-label">${s.label[lang]}</span>
      </div>`
  ).join("");
}

/* ---------- 首页：编号特性（01 / 02 / 03 …） ---------- */
function renderFeatures() {
  const grid = document.getElementById("feat-grid");
  if (!grid) return;
  grid.innerHTML = FEATURES.map(
    (f, i) => `<li class="feat-card">
        <span class="feat-num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${f.title[lang]}</h3>
        <p>${f.desc[lang]}</p>
      </li>`
  ).join("");
}

/* ---------- 首页：Hero 产品预览面板（软件库总览示意） ---------- */
function renderPreview() {
  const list = document.getElementById("preview-list");
  if (!list) return;
  list.innerHTML = softwareList
    .map((s) => {
      const meta = s.version ? s.version : (typeof s.tags[0] === "string" ? s.tags[0] : s.tags[0][lang]);
      const off = s.status === "discontinued";
      return `<div class="preview-row">
          <span class="p-dot" style="background:${off ? "var(--amber)" : "var(--ok)"}"></span>
          <span class="p-name">${s.name[lang]}</span>
          <span class="p-meta">${meta}</span>
        </div>`;
    })
    .join("");

  // 版本徽章：在「仍在维护」的软件里取最高版本号（按数字比较，不看列表顺序）
  const tag = document.getElementById("preview-tag");
  if (tag) {
    const verKey = (v) => (String(v).match(/\d+/g) || []).map(Number);
    const newest = softwareList
      .filter((s) => s.version && s.status !== "discontinued")
      .map((s) => s.version)
      .sort((a, b) => {
        const A = verKey(a), B = verKey(b);
        for (let i = 0; i < 3; i++) {
          if ((B[i] || 0) !== (A[i] || 0)) return (B[i] || 0) - (A[i] || 0);
        }
        return 0;
      })[0];
    tag.textContent = newest || "latest";
  }

  const status = document.getElementById("preview-status");
  if (status) {
    status.innerHTML = `<span class="p-dot"></span><span>${softwareList.length} ${t(
      "previewStatusCount"
    )}</span>`;
  }
}

function applyI18n() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = t("brand");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  // 静态双语区块（如「关于本项目」）：中文模式只显示中文，英文模式只显示英文
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.dataset.lang === lang ? "" : "none";
  });
  // 个人介绍
  document.getElementById("profile-name").textContent = PROFILE.name[lang];
  document.getElementById("profile-bio").textContent = PROFILE.bio[lang];
  // 语言切换按钮：显示"将要切换到的语言"
  const btn = document.getElementById("lang-toggle");
  btn.textContent = lang === "zh" ? "EN" : "中文";
  btn.setAttribute("aria-label", lang === "zh" ? "切换语言" : "Switch language");
  renderStats();
  renderFeatures();
  renderPreview();
  renderCards();
  renderResourceCards();
  if (typeof window.splitHeroTitle === "function") window.splitHeroTitle();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem("site-lang", lang);
  applyI18n();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyI18n();
