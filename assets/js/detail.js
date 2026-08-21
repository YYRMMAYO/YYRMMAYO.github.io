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

  /* ---------------- 3. 鼠标跟随光晕 ---------------- */
  const glow = document.querySelector(".cursor-glow");
  const finePointer = !!(window.matchMedia && window.matchMedia("(pointer: fine)").matches);
  if (glow && finePointer && !reduced) {
    window.addEventListener(
      "pointermove",
      (e) => {
        glow.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)";
      },
      { passive: true }
    );
  }
})();
