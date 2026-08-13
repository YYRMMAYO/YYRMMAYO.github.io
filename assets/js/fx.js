/* ============================================================
 * YYRMM 的软件库 — 视觉特效（纯原生 JS，无依赖）
 * 1) 滚动进场 reveal（IntersectionObserver + MutationObserver）
 * 2) 粒子网络背景（canvas，粒子数受控）
 * 3) 鼠标跟随光晕
 * 4) 卡片轻微倾斜（仅精细指针设备）
 * 全部尊重 prefers-reduced-motion
 * ============================================================ */
(function () {
  "use strict";

  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var finePointer = !!(window.matchMedia && window.matchMedia("(pointer: fine)").matches);

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
      if (d) el.style.transitionDelay = d * 90 + "ms";
      io.observe(el);
    });
  }

  staggerCards();
  setupReveal(document);

  // 语言切换会重绘卡片（main.js renderCards），监听变化重新初始化
  if ("MutationObserver" in window) {
    var mo = new MutationObserver(function () {
      staggerCards();
      setupReveal(document);
    });
    var grid = document.getElementById("software-grid");
    mo.observe(grid || document.body, { childList: true, subtree: true });
  }

  /* ---------------- 2. 粒子网络背景 ---------------- */
  var canvas = document.getElementById("bg-canvas");
  if (canvas && !reduced) {
    var ctx = canvas.getContext("2d");
    var w = 0, h = 0, dpr = 1;
    var particles = [];
    var raf = null;
    var palette = ["139,92,246", "34,211,238", "244,114,182"]; // r,g,b
    var LINK = 130;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.max(16, Math.min(64, Math.round((w * h) / 24000)));
      while (particles.length < target) particles.push(spawn());
      particles.length = target;
    }

    function spawn() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        c: palette[(Math.random() * palette.length) | 0]
      };
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var i, j, p, q, dx, dy, d2, a;
      for (i = 0; i < particles.length; i++) {
        p = particles[i];
        for (j = i + 1; j < particles.length; j++) {
          q = particles[j];
          dx = p.x - q.x;
          dy = p.y - q.y;
          d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            a = (1 - Math.sqrt(d2) / LINK) * 0.16;
            ctx.strokeStyle = "rgba(" + p.c + "," + a.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      for (i = 0; i < particles.length; i++) {
        p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;
        ctx.fillStyle = "rgba(" + p.c + ",0.72)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    function start() { if (!raf) raf = requestAnimationFrame(step); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    resize();
    start();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
  }

  /* ---------------- 3. 鼠标跟随光晕 ---------------- */
  var glow = document.querySelector(".cursor-glow");
  if (glow && finePointer && !reduced) {
    window.addEventListener(
      "pointermove",
      function (e) {
        glow.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)";
      },
      { passive: true }
    );
  }

  /* ---------------- 4. 卡片轻微倾斜 ---------------- */
  if (finePointer && !reduced) {
    document.addEventListener(
      "pointermove",
      function (e) {
        var card = e.target && e.target.closest ? e.target.closest(".card") : null;
        if (!card) return;
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateX(" + (-py * 4).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg) translateY(-6px)";
      },
      { passive: true }
    );
    document.addEventListener("pointerout", function (e) {
      var card = e.target && e.target.closest ? e.target.closest(".card") : null;
      if (card && !(card.contains(e.relatedTarget))) {
        card.style.transform = "";
      }
    });
  }

  /* ---------------- 5. 卡片点击涟漪反馈 ---------------- */
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
      window.setTimeout(function () { if (rip.parentNode) rip.parentNode.removeChild(rip); }, 750);
      window.setTimeout(function () { card.classList.remove("pressed"); }, 220);
    });
  }
})();
