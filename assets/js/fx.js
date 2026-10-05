/* ============================================================
 * YYRMM 的软件库 — 视觉特效（纯原生 JS，无依赖）
 * 1) Hero 标题逐字上浮入场
 * 2) 滚动进场 reveal（IntersectionObserver + MutationObserver）
 * 3) 卡片鼠标跟随高光（--mx / --my）
 * 4) 卡片点击涟漪反馈
 * 全部尊重 prefers-reduced-motion；无粒子、无第三方库
 * ============================================================ */
(function () {
  "use strict";

  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------------- 0. Hero 标题逐字入场 ---------------- */
  // 把标题拆成单字 span（--i 控制依次浮现的延迟），语言切换 / 重绘后由 main.js 再次调用。
  // 两个坑：
  //   1) 空白字符不能包进 inline-block（行首空白会被折叠，英文标题变成「YYRMM'sSoftware」）
  //   2) 拉丁单词要整词包一层 nowrap 容器，否则逐字 span 之间会被断行（「Softwar / e」）
  // 中文逐字仍保持可断行，窄屏不会顶出容器。
  var CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u3000-\u303F]/;

  window.splitHeroTitle = function () {
    var el = document.getElementById("hero-title");
    if (!el) return;
    var text = el.textContent.trim();
    if (!text || el.dataset.split === text) return;
    el.dataset.split = text;
    el.textContent = "";

    var idx = 0;
    function charSpan(ch) {
      var s = document.createElement("span");
      s.className = "char";
      s.style.setProperty("--i", idx++);
      s.textContent = ch;
      return s;
    }

    text.split(/(\s+)/).forEach(function (seg) {
      if (!seg) return;
      if (/^\s+$/.test(seg)) {          // 空白：留作文本节点，作为可断行位置
        idx += seg.length;
        el.appendChild(document.createTextNode(" "));
        return;
      }
      if (CJK.test(seg)) {              // 中文：逐字 inline-block，允许逐字换行
        Array.prototype.forEach.call(seg, function (ch) { el.appendChild(charSpan(ch)); });
        return;
      }
      var word = document.createElement("span");   // 拉丁 / 数字：整词不可断开
      word.className = "word";
      Array.prototype.forEach.call(seg, function (ch) { word.appendChild(charSpan(ch)); });
      el.appendChild(word);
    });
  };
  window.splitHeroTitle();

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

  // 卡片网格：软件列表 + 资料列表（资料卡片没有详情页，仅做进场错位）
  var CARD_GRIDS = ["software-grid", "resource-grid"];

  function staggerCards() {
    CARD_GRIDS.forEach(function (id) {
      var grid = document.getElementById(id);
      if (!grid) return;
      Array.prototype.forEach.call(grid.children, function (card, i) {
        card.setAttribute("data-reveal-delay", String(i % 3));
      });
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

  // 语言切换会重绘卡片（main.js renderCards / renderResourceCards），监听变化重新初始化
  if ("MutationObserver" in window && io) {
    var mo = new MutationObserver(function () {
      staggerCards();
      setupReveal(document);
    });
    var watched = 0;
    CARD_GRIDS.forEach(function (id) {
      var grid = document.getElementById(id);
      if (grid) { mo.observe(grid, { childList: true, subtree: true }); watched++; }
    });
    if (!watched) mo.observe(document.body, { childList: true, subtree: true });
  }

  /* ---------------- 2. 卡片鼠标跟随高光 ---------------- */
  // 仅在支持悬停的设备上启用：把光标位置写进 --mx / --my，由 CSS 画出高光
  var GLOW_TARGETS = ".card, .feat-card";
  if (!reduced && window.matchMedia && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener(
      "pointermove",
      function (e) {
        var el = e.target && e.target.closest ? e.target.closest(GLOW_TARGETS) : null;
        if (!el) return;
        var r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (e.clientX - r.left) + "px");
        el.style.setProperty("--my", (e.clientY - r.top) + "px");
      },
      { passive: true }
    );
  }

  /* ---------------- 3. 卡片点击涟漪反馈（极淡强调色） ---------------- */
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
