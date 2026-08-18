/* ============================================================
 * YYRMM 的软件库 — 视觉特效（纯原生 JS，无依赖）
 * 1) 滚动进场 reveal（IntersectionObserver + MutationObserver）
 * 2) 星河背景（canvas：闪烁星光 + 流星，粒子数受控，性能优先）
 * 3) 鼠标跟随光晕
 * 4) 卡片点击涟漪反馈
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

  /* ---------------- 2. 星河背景（闪烁星光 + 流星） ---------------- */
  var canvas = document.getElementById("bg-canvas");
  if (canvas && !reduced) {
    var ctx = canvas.getContext("2d");
    var w = 0, h = 0, dpr = 1;
    var stars = [];
    var meteors = [];
    var raf = null;
    var lastMeteorAt = 0;
    var STAR_COLORS = ["#fdf6e3", "#f2c879", "#e88ab0", "#e8a87c"]; // 星白 / 金 / 玫 / 桃

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); // 限制高分屏像素量
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // 星光数量按面积降采样：约每 4200px² 一颗，120~220 之间
      var target = Math.max(120, Math.min(220, Math.round((w * h) / 4200)));
      while (stars.length < target) stars.push(spawnStar());
      stars.length = target;
    }

    function spawnStar() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,          // 半径 0.3~1.4
        tw: Math.random() * 0.06 + 0.02,       // 闪烁速率
        ph: Math.random() * Math.PI * 2,       // 随机相位
        vy: Math.random() * 0.12,              // 缓慢漂移
        c: STAR_COLORS[(Math.random() * STAR_COLORS.length) | 0]
      };
    }

    // 生成一颗流星：从头亮白点 + 向运动反方向渐隐尾迹
    function spawnMeteor(now) {
      var fromLeft = Math.random() > 0.5;
      var angle = (fromLeft ? -1 : 1) * (Math.PI / 4 + Math.random() * Math.PI / 8); // 45°~67° 斜射
      var speed = 9 + Math.random() * 5;
      var x0 = Math.random() * w * 0.6 + w * 0.15;
      var y0 = -20;
      meteors.push({
        x: x0, y: y0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life0: now,          // 出生时刻（ms）
        maxLife: 800,        // 寿命 ms
        len: 60 + Math.random() * 40
      });
      if (meteors.length > 3) meteors.shift();
    }

    function drawMeteor(m, now) {
      var t = now - m.life0;
      if (t >= m.maxLife) return false;
      m.x += m.vx;
      m.y += m.vy;
      var fade = 1 - t / m.maxLife;
      // 尾迹：从头点向运动反方向渐变
      var g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 6, m.y - m.vy * 6);
      g.addColorStop(0, "rgba(253,246,227," + (0.9 * fade).toFixed(3) + ")");
      g.addColorStop(0.35, "rgba(242,200,121," + (0.45 * fade).toFixed(3) + ")");
      g.addColorStop(1, "rgba(242,200,121,0)");
      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.vx * 6, m.y - m.vy * 6);
      ctx.stroke();
      return true;
    }

    function step(now) {
      // 开场动画 / 弹窗全屏遮挡时跳过绘制，省 CPU
      if (!document.body.classList.contains("modal-open")) {
        ctx.clearRect(0, 0, w, h);
        var i, s, a;
        for (i = 0; i < stars.length; i++) {
          s = stars[i];
          s.y += s.vy;
          if (s.y > h + 4) { s.y = -4; s.x = Math.random() * w; }
          a = 0.35 + 0.5 * (0.5 + 0.5 * Math.sin(now * 0.001 * s.tw * 10 + s.ph)); // 闪烁
          ctx.globalAlpha = a;
          ctx.fillStyle = s.c;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, 6.2832);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        // 流星：每 4~9s 生成一颗
        if (now - lastMeteorAt > 4000 + Math.random() * 5000) {
          lastMeteorAt = now;
          spawnMeteor(now);
        }
        for (i = meteors.length - 1; i >= 0; i--) {
          if (!drawMeteor(meteors[i], now)) meteors.splice(i, 1);
        }
      }
      raf = requestAnimationFrame(step);
    }

    function start() {
      if (!raf) {
        lastMeteorAt = performance.now();
        raf = requestAnimationFrame(step);
      }
    }
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

  /* ---------------- 4. 卡片点击涟漪反馈 ---------------- */
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
