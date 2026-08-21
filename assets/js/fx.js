/* ============================================================
 * YYRMM 的软件库 — 视觉特效（纯原生 JS，无依赖）
 * 1) 滚动进场 reveal（IntersectionObserver + MutationObserver）
 * 2) 卡片点击涟漪反馈
 * 全部尊重 prefers-reduced-motion；无粒子、无光晕（Neo Kinpaku 克制原则）
 * ============================================================ */
(function () {
  "use strict";

  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------------- 1. 滚动进场 reveal ---------------- */
  var io = null;
  if ("IntersectionObserver" in window && !reduced) {
    io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }

  function staggerCards() {
    var grid = document.getElementById("software-grid");
    if (!grid) return;
    Array.prototype.forEach.call(grid.children, function (card, i) {
      card.setAttribute("data-reveal-delay", String(i % 3));
    });
  }

  function setupReveal(root) {
    root = root || document;
    var els = [];
    if (root.matches && root.matches("[data-reveal]")) els.push(root);
    if (root.querySelectorAll) {
      els = els.concat(Array.prototype.slice.call(root.querySelectorAll("[data-reveal]")));
    }
    els.forEach(function (el) {
      if (el.getAttribute("data-reveal-ready")) return;
      el.setAttribute("data-reveal-ready", "1");
      if (!io) return; // 无 IntersectionObserver（老浏览器 / 动效减弱）：保持可见
      el.classList.add("reveal");
      var d = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
      if (d) el.style.transitionDelay = d * 80 + "ms";
      io.observe(el);
    });
  }

  staggerCards();
  setupReveal(document);

  // 语言切换会重绘卡片（main.js renderCards），监听变化重新初始化
  if ("MutationObserver" in window && io) {
    new MutationObserver(function () {
      staggerCards();
      setupReveal(document);
    }).observe(document.getElementById("software-grid") || document.body, { childList: true, subtree: true });
  }

  /* ---------------- 2. 卡片点击涟漪反馈（极淡金色） ---------------- */
  if (!reduced) {
    document.addEventListener("pointerdown", function (e) {
      if (e.button !== 0) return;
      var card = e.target && e.target.closest ? e.target.closest(".card") : null;
      if (!card) return;
      var r = card.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      var size = Math.max(r.width, r.height) * 1.7;
      var rip = document.createElement("span");
      rip.className = "card-ripple";
      rip.style.width = rip.style.height = size + "px";
      rip.style.left = (x - size / 2) + "px";
      rip.style.top = (y - size / 2) + "px";
      card.appendChild(rip);
      card.classList.add("pressed");
      window.setTimeout(function () { if (rip.parentNode) rip.parentNode.removeChild(rip); }, 650);
      window.setTimeout(function () { card.classList.remove("pressed"); }, 200);
    });
  }
})();
