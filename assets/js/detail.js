/* ============================================================
 * YYRMM 的软件库 — 详情页脚本
 * 1) 中英双语切换（与主页共用 localStorage key: site-lang）
 * 2) 滚动进场 reveal
 * 3) 鼠标跟随光晕
 * 全部尊重 prefers-reduced-motion
 * ============================================================ */
(function () {
  "use strict";

  const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------------- 1. 双语切换 ---------------- */
  const KEY = "site-lang";
  let lang = localStorage.getItem(KEY) || ((navigator.language || "zh").startsWith("zh") ? "zh" : "en");

  function applyLang() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.style.display = el.dataset.lang === lang ? "" : "none";
    });
    const btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "zh" ? "EN" : "中文";
      btn.setAttribute("aria-label", lang === "zh" ? "切换语言" : "Switch language");
    }
    renderChangelog();
  }

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      lang = lang === "zh" ? "en" : "zh";
      localStorage.setItem(KEY, lang);
      applyLang();
    });
  }
  applyLang();

  /* ---------------- 2. 滚动进场 reveal ---------------- */
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("reveal");
      const d = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
      if (d) el.style.transitionDelay = d * 90 + "ms";
      io.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in-view"));
  }

  /* ---------------- 3. 更新记录渲染 ----------------
   * 数据来自 assets/js/changelog.js（由 scripts/sync-changelog.py 生成）
   * 页面 <main data-app="key"> 决定展示哪个软件的记录；en 为空时回退中文 */
  function escHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderChangelog() {
    const host = document.querySelector("main[data-app]");
    const box = document.getElementById("changelog");
    if (!host || !box) return;
    const key = host.dataset.app;
    const entries = (typeof CHANGELOG !== "undefined" && CHANGELOG[key]) || [];
    if (!entries.length) {
      box.innerHTML = '<p class="changelog-empty">' +
        escHtml(lang === "zh" ? "暂无更新记录。" : "No changelog yet.") + "</p>";
      return;
    }
    // 来源提示：以下为最近 3 个更新版本（数据来自 GitHub Releases / Tags，见 sync-changelog.py）
    const MAX_KEPT = 3;
    const count = entries.length;
    const note = lang === "zh"
      ? "以下为该软件最近的 <strong>" + count + "/" + MAX_KEPT + "</strong> 个更新版本，数据来自 GitHub Releases / Tags"
      : "Latest <strong>" + count + "/" + MAX_KEPT + "</strong> versions below, pulled from GitHub Releases / Tags";
    box.innerHTML =
      '<p class="changelog-note">' + note + "</p>" +
      entries
        .map((e) => {
        const tagline = e.tagline ? (e.tagline[lang] || e.tagline.zh || "") : "";
        const items = (e.items || [])
          .map((it) => {
            const txt = it[lang] || it.zh || "";
            return txt ? `<li>${escHtml(txt)}</li>` : "";
          })
          .join("");
        return `
        <div class="changelog-entry">
          <div class="changelog-head">
            <span class="changelog-ver">${escHtml(e.version)}</span>
            ${tagline ? `<span class="changelog-tagline">${escHtml(tagline)}</span>` : ""}
          </div>
          ${items ? `<ul class="changelog-items">${items}</ul>` : ""}
        </div>`;
      })
      .join("");
  }

  /* ---------------- 4. 克制的交互反馈（预留扩展位） ---------------- */
})();
