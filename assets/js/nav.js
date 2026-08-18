/* ============================================================
 * YYRMM 的软件库 — 右侧弧形导航盘（radial-nav）
 * 依赖 main.js 的全局 t() / lang（script 顺序必须在 main.js 之后）
 * 1) 生成 4 个导航项（复用 I18N 文案，data-i18n 跟随语言切换）
 * 2) 沿 215°~325° 扇形弧线定位（rotate + translateY(-R) + rotate 三段式）
 * 3) 点击跳转 / 滚轮节流切换 / IntersectionObserver 滚动高亮
 * 4) 同步顶部导航栏 active 状态
 * 纯原生 JS，无依赖
 * ============================================================ */
(function () {
  "use strict";

  var nav = document.getElementById("radial-nav");
  if (!nav) return;

  /* ---------------- 配置 ---------------- */
  var SECTIONS = [
    { id: "home", icon: "🏠", i18n: "navHome" },
    { id: "game", icon: "💞", i18n: "navGame" },
    { id: "profile", icon: "👤", i18n: "navProfile" },
    { id: "software", icon: "🧩", i18n: "navSoftware" },
  ];
  var N = SECTIONS.length;
  var R = 80;            // 半径 px（容器 230px）
  var CENTER = 270;      // 扇形圆心角（指向左）
  var SPREAD = 55;       // 扇形半张角
  var WHEEL_LOCK = 450;  // 滚轮切换节流 ms

  var itemsEl = nav.querySelector(".radial-items");
  var items = [];
  var active = 0;
  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---------------- 生成结构 ---------------- */
  function label(key) {
    return typeof t === "function" ? t(key) : key;
  }

  function build() {
    itemsEl.innerHTML = "";
    items = [];
    SECTIONS.forEach(function (s, i) {
      var a = document.createElement("a");
      a.className = "radial-item";
      a.href = "#" + s.id;
      a.setAttribute("data-index", String(i));
      a.setAttribute("aria-label", label(s.i18n));
      a.innerHTML =
        '<span class="ri-icon">' + s.icon + '</span>' +
        '<span class="ri-label" data-i18n="' + s.i18n + '">' + label(s.i18n) + "</span>";
      // 三段式定位：rotate(a) 旋转坐标系 → translateY(-R) 推到半径处 → rotate(-a) 回正
      var deg = CENTER + (SPREAD * (2 * i - (N - 1))) / (N - 1);
      a.style.transform = "rotate(" + deg + "deg) translateY(-" + R + "px) rotate(" + -deg + "deg)";
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        setActive(i);
        var sec = document.getElementById(s.id);
        if (sec && sec.scrollIntoView) {
          sec.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        } else if (sec) {
          window.location.hash = s.id;
        }
      });
      itemsEl.appendChild(a);
      items.push(a);
    });
  }

  /* ---------------- 高亮 ---------------- */
  function setActive(i) {
    if (i < 0 || i >= N) return;
    active = i;
    items.forEach(function (it, k) {
      it.classList.toggle("active", k === i);
    });
    // 供雷达扫描光/指示对齐的当前角度
    var deg = CENTER + (SPREAD * (2 * i - (N - 1))) / (N - 1);
    nav.style.setProperty("--active-angle", deg + "deg");
    // 同步顶部导航栏
    var topLinks = document.querySelectorAll(".top-link");
    for (var k = 0; k < topLinks.length; k++) {
      var link = topLinks[k];
      var target = (link.getAttribute("href") || "").replace(/^#/, "");
      link.classList.toggle("active", target === SECTIONS[i].id);
    }
  }

  /* ---------------- 滚动高亮（IntersectionObserver 优先，scroll 兜底） ---------------- */
  function indexOfSection(el) {
    for (var i = 0; i < N; i++) {
      if (el && el.id === SECTIONS[i].id) return i;
    }
    return -1;
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var idx = indexOfSection(en.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 } // 视口中线带：谁穿过谁为当前
    );
    SECTIONS.forEach(function (s) {
      var sec = document.getElementById(s.id);
      if (sec) io.observe(sec);
    });
  } else {
    var ticking = false;
    function computeActive() {
      ticking = false;
      var best = 0, bestDist = Infinity;
      var mid = window.innerHeight * 0.45;
      for (var i = 0; i < N; i++) {
        var sec = document.getElementById(SECTIONS[i].id);
        if (!sec) continue;
        var r = sec.getBoundingClientRect();
        var dist = Math.abs(r.top - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      }
      setActive(best);
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) { ticking = true; requestAnimationFrame(computeActive); }
      },
      { passive: true }
    );
    computeActive();
  }

  /* ---------------- 滚轮切换（节流） ---------------- */
  var lock = false;
  nav.addEventListener(
    "wheel",
    function (e) {
      if (lock) return;
      lock = true;
      var next = (active + (e.deltaY > 0 ? 1 : N - 1)) % N;
      setActive(next);
      var sec = document.getElementById(SECTIONS[next].id);
      if (sec && sec.scrollIntoView) {
        sec.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      }
      setTimeout(function () { lock = false; }, WHEEL_LOCK);
    },
    { passive: false }
  );

  /* ---------------- 初始化 ---------------- */
  build();
  setActive(0);
})();
