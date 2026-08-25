/* ============================================================
 * YYRMM 的软件库 — 主题切换（深色漆面 ⇄ 暖白漆面）
 * 1) 在 <head> 中同步加载，第一时间设置 data-theme，防止闪烁
 * 2) 切换按钮 #theme-toggle：太阳/月亮图标，localStorage 记忆
 * 3) 与主页 / 详情页共用，key: site-theme（默认深色，保留原风格）
 * 全部尊重 prefers-reduced-motion
 * ============================================================ */
(function () {
  "use strict";

  var KEY = "site-theme";
  var root = document.documentElement;

  /* ---------------- 1. 初始化：读取偏好并立即应用（防闪烁） ---------------- */
  var saved = "light";
  try {
    var v = localStorage.getItem(KEY);
    if (v === "dark" || v === "light") saved = v;
  } catch (e) { /* 隐私模式等场景忽略 */ }
  root.setAttribute("data-theme", saved);

  /* ---------------- 2. 图标（线性风格，与站内 SVG 一致） ---------------- */
  var ICONS = {
    dark: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    light: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  };

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* 忽略 */ }
    updateButton(theme);
  }

  function updateButton(theme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var next = theme === "light" ? "dark" : "light";
    var zh = next === "light" ? "切换到浅色主题" : "切换到深色主题";
    var en = next === "light" ? "Switch to light theme" : "Switch to dark theme";
    btn.innerHTML = ICONS[theme];
    btn.setAttribute("aria-label", (document.documentElement.lang || "zh").indexOf("zh") === 0 ? zh : en);
    btn.title = btn.getAttribute("aria-label");
  }

  /* ---------------- 3. 绑定切换按钮 ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    updateButton(saved);
    btn.addEventListener("click", function () {
      var cur = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      var next = cur === "light" ? "dark" : "light";
      saved = next;
      apply(next);
    });
  });
})();
