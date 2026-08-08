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
  heroTitle:     { zh: "YYRMM 的软件库", en: "YYRMM's Software Library" },
  heroSub:       { zh: "这里收录了我开发的软件，欢迎试用与反馈。", en: "A collection of software I've built. Try them out and share your feedback." },
  sectionTitle:  { zh: "软件列表", en: "Software List" },
  sectionDesc:   { zh: "每款软件提供 GitHub 与网盘两种下载方式，点击卡片上的按钮即可获取。", en: "Each app offers both GitHub and cloud-drive downloads — use the buttons on each card." },
  emptyState:    { zh: "暂无可展示的软件，敬请期待。", en: "No software to show yet. Stay tuned!" },
  footerName:    { zh: "YYRMM的软件库", en: "YYRMM's Software Library" },
  footerHost:    { zh: "托管于 GitHub Pages", en: "Hosted on GitHub Pages" },
  btnGithub:     { zh: "GitHub 下载", en: "GitHub Download" },
  btnNetdisk:    { zh: "网盘下载", en: "Netdisk Download" },
  pwdLabel:      { zh: "密码", en: "Password" },
  btnWebsite:    { zh: "主页", en: "Website" },
  btnShow:       { zh: "功能展示", en: "Features" },
  btnIntro:      { zh: "▶ 观看开场动画", en: "▶ Watch Intro" },
  introSkip:     { zh: "跳过 ▸", en: "Skip ▸" },
  modalAria:     { zh: "功能展示", en: "Features" },
  closeAria:     { zh: "关闭", en: "Close" },
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
    key: "aistudio",
    icon: "🎨",
    name: { zh: "AIStudioHub", en: "AIStudioHub" },
    desc: {
      zh: "AI 制作资源整合中心：汇集 154 个主流 AI 平台与开源工具（视频制作、图像生成、音乐音频、网页制作、文本大模型），内置离线中文教程与 AI Agent / Skill 专区，支持模糊搜索、收藏与个性化主题。",
      en: "An AI production resource hub: 154 mainstream AI platforms & open-source tools (video, image, music, web, LLM), offline Chinese tutorials, and an AI Agent / Skills section — with fuzzy search, favorites and themes.",
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
    accent: "#4f46e5",
  },
  {
    key: "guidecraft",
    icon: "🤖",
    name: { zh: "GuideCraft", en: "GuideCraft" },
    desc: {
      zh: "引导式 AI 助手：通过多轮对话把你的模糊想法变成可运行的 Python 自动化脚本，支持千问 / DeepSeek / OpenAI / Claude 等主流模型，生成代码可一键沙盒试运行并导出项目。",
      en: "A guided AI assistant that turns vague ideas into runnable Python automation scripts through Q&A — supports Qwen / DeepSeek / OpenAI / Claude, with sandbox test-run and one-click project export.",
    },
    tags: ["Windows", { zh: "AI 助手", en: "AI Assistant" }, { zh: "免费", en: "Free" }],
    links: {
      download: "https://github.com/YYRMMAYO/GuideCraft",
      website: "",
    },
    accent: "#0d9488",
  },
  {
    key: "obs",
    icon: "🎥",
    name: { zh: "OBS 排障助手（Windows）", en: "OBS Helper (Windows)" },
    desc: {
      zh: "面向直播新手的 OBS Studio 排障工具：内置 85 条问题知识库，支持智能诊断、日志分析、OBS 远程控制台、全局热键、场景自动切换与直播间一键搭建，纯离线可用。",
      en: "An OBS Studio troubleshooting tool for livestreaming beginners: 85-entry offline knowledge base, smart diagnosis, log analysis, OBS remote console, global hotkeys, auto scene switching and one-click livestream setup.",
    },
    shot: "assets/images/showcase/obs.jpg",
    features: {
      tagline: { zh: "直播排障一步到位", en: "Livestream troubleshooting, solved" },
      items: [
        { zh: "内置 85 条问题知识库，离线可用", en: "85-entry offline knowledge base" },
        { zh: "智能诊断：一键定位黑屏 / 卡顿 / 音画不同步", en: "Smart diagnosis: black screen, lag & A/V sync" },
        { zh: "日志分析：快速定位崩溃与报错", en: "Log analysis for crashes & errors" },
        { zh: "OBS 远程控制台 + 全局热键", en: "OBS remote console + global hotkeys" },
        { zh: "场景自动切换 + 直播间一键搭建", en: "Auto scene switching + one-click livestream setup" },
        { zh: "纯离线运行，无需联网", en: "Fully offline, no network needed" },
      ],
    },
    tags: ["Windows", { zh: "OBS 排障", en: "OBS Troubleshooting" }, { zh: "免费", en: "Free" }],
    links: {
      download: "https://github.com/YYRMMAYO/OBS_Helper",
      netdisk: { url: "https://wwbpq.lanzouu.com/b01d7578be", pwd: "YYKWY" },
      website: "",
    },
    accent: "#dc2626",
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
    accent: "#d97706",
  },
  {
    key: "sinan",
    icon: "🧰",
    name: { zh: "司南工具箱", en: "Sinan Toolbox" },
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
    accent: "#2563eb",
  },
];

/* ============================================================
 * 以下为逻辑代码，一般无需修改
 * ============================================================ */

let lang = localStorage.getItem("site-lang") || (navigator.language || "zh").startsWith("zh") ? "zh" : "en";

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
      <article class="card">
        <div class="card-thumb" style="background: linear-gradient(135deg, ${s.accent}1a, ${s.accent}45);">${s.icon}</div>
        <div class="card-body">
          <h3 class="card-title">${s.name[lang]}</h3>
          <p class="card-desc">${s.desc[lang]}</p>
          <div class="card-tags">${renderTags(s.tags)}</div>
          <div class="card-links">${renderLinks(s.links)}${
            s.features ? `<button class="btn btn-show" type="button" data-feature-key="${s.key}">${t("btnShow")}</button>` : ""
          }</div>
        </div>
      </article>`
    )
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
  // 个人介绍
  document.getElementById("profile-name").textContent = PROFILE.name[lang];
  document.getElementById("profile-bio").textContent = PROFILE.bio[lang];
  // 语言切换按钮：显示"将要切换到的语言"
  const btn = document.getElementById("lang-toggle");
  btn.textContent = lang === "zh" ? "EN" : "中文";
  renderCards();
  // 若功能弹窗正开着，跟随语言刷新内容
  if (window.Showcase && typeof window.Showcase.refreshOpen === "function") {
    window.Showcase.refreshOpen();
  }
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem("site-lang", lang);
  applyI18n();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyI18n();
