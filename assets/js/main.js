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
};

/* ---------- 3. 软件数据（已从 GitHub 仓库整理，SC01 已按要求排除） ----------
 * 字段说明：
 *   icon   卡片缩略图上的大图标（emoji 或文字，或换成真实截图）
 *   name   软件名称 { zh, en }
 *   desc   软件简介 { zh, en }
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
    desc: {
      zh: "AI 制作资源整合中心：汇集 181 个主流 AI 平台与开源工具（视频制作、图像生成、音乐音频、网页制作、文本大模型），内置离线中文教程与 AI Agent / Skill 专区，支持模糊搜索、收藏与个性化主题。",
      en: "An AI production resource hub: 181 mainstream AI platforms & open-source tools (video, image, music, web, LLM), offline Chinese tutorials, and an AI Agent / Skills section — with fuzzy search, favorites and themes.",
    },
    shot: "assets/images/showcase/aistudio.jpg",
    features: {
      tagline: { zh: "AI 制作资源整合中心", en: "AI production resource hub" },
      items: [
        { zh: "汇集 154 个主流 AI 平台与开源工具", en: "154 mainstream AI platforms & open-source tools" },
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
    name: { zh: "OBS 排障助手（Windows）", en: "OBS Helper (Windows)" },
    version: "V2.9.1",
    desc: {
      zh: "面向直播新手的 OBS Studio 排障工具：212 条离线知识库、跳转式新手引导与官方 OBS 下载入口、智能诊断、录制守护与实时日志预警、黑屏/音频/虚拟摄像头三合一深度体检、OBS 远程控制台，纯离线可用。",
      en: "An OBS Studio troubleshooting tool for livestreaming beginners: 212-entry offline knowledge base, guided onboarding and an official OBS download entry, smart diagnosis, recording watchdog, real-time log alerts, black-screen / audio / virtual-camera health checks and an OBS remote console — fully offline.",
    },
    shot: "assets/images/showcase/obs.jpg",
    features: {
      tagline: { zh: "直播排障一步到位", en: "Livestream troubleshooting, solved" },
      items: [
        { zh: "212 条问题知识库，离线可用", en: "212-entry offline knowledge base" },
        { zh: "跳转式新手引导 + 官方 OBS 下载入口（V2.9）", en: "Jump-style onboarding + official OBS download (V2.9)" },
        { zh: "录制守护：断连 / 心跳超时 / 重连确认三层告警", en: "Recording watchdog with 3-layer alerts" },
        { zh: "实时日志尾随：掉帧、过载、断流即时预警", en: "Live log tailing for frame loss & overload" },
        { zh: "黑屏 / 音频设备 / 虚拟摄像头三合一深度体检", en: "Black-screen / audio / virtual-cam checks" },
        { zh: "OBS 远程控制台 + 全局热键", en: "OBS remote console + global hotkeys" },
        { zh: "纯离线运行，无需联网", en: "Fully offline, no network needed" },
      ],
    },
    tags: ["Windows", "V2.9.1", { zh: "OBS 排障", en: "OBS Troubleshooting" }, { zh: "免费", en: "Free" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS_Helper",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d7578be", pwd: "YYKWY" },
      website: "",
    },
    accent: "#a63a2b",
  },
  {
    key: "obs-mac",
    icon: "🍎",
    name: { zh: "OBS 排障助手（macOS）", en: "OBS Helper (macOS)" },
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
    version: "v2.8.0",
    desc: {
      zh: "纯原生 C++ / Qt6 的 OBS Studio 前端插件：以停靠面板直接嵌入 OBS 主窗口，七大专栏覆盖体检、日志分析、设置体检、性能监控、插件管理、工具箱与系统信息，全程只读检测、零额外进程。",
      en: "A native C++ / Qt6 front-end plugin for OBS Studio: embeds a dock panel right inside the main window with seven tabs — health check, log analysis, settings audit, performance monitor, plugin manager, toolbox and system info. Read-only, zero extra processes.",
    },
    features: {
      tagline: { zh: "嵌进 OBS 的直播体检台", en: "A checkup desk inside OBS" },
      items: [
        { zh: "停靠面板嵌入 OBS 主窗口，无需 .NET 运行库", en: "Dock panel in OBS, no .NET runtime needed" },
        { zh: "本地离线解析日志，对齐官方 Log Analyzer 规则", en: "Offline log analysis aligned with official rules" },
        { zh: "「元凶插件」一键禁用，崩溃转储定位崩溃模块", en: "One-click disable of culprit plugins; crash dump parsing" },
        { zh: "性能监控：帧耗时 / GPU 占用 / 丢帧实时告警", en: "Perf monitor: frame time, GPU usage, drop alerts" },
        { zh: "录制路径预检 + 损坏录制件扫描 + 开播一键自检", en: "Record path pre-check, corrupt file scan, pre-flight self-check" },
        { zh: "诊断报告一键导出，推流密钥自动脱敏", en: "One-click report export, stream key sanitized" },
      ],
    },
    tags: ["Windows x64", "OBS 30.x–32.x", "v2.8.0", { zh: "开源", en: "Open Source" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS_Helper_Plugin/releases",
      website: "https://github.com/YYRMMAYO/OBS_Helper_Plugin",
    },
    accent: "#3d5a56",
  },
  {
    key: "sinan",
    icon: "🧰",
    name: { zh: "司南工具箱", en: "Sinan Toolbox" },
    status: "discontinued",
    desc: {
      zh: "完全免费、非盈利的 Windows 辅助工具：专注系统检测、清理优化、网络诊断与故障排查，本地运行、操作安全，内置 AI 助手与多套个性化主题。",
      en: "A completely free, non-profit Windows utility focused on system detection, cleanup & optimization, network diagnostics and troubleshooting — runs locally, safe to use, with an AI assistant and multiple themes.",
    },
    shot: "assets/images/showcase/sinan.jpg",
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
            s.version ? ` <span class="card-version">${s.version}</span>` : ""
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
