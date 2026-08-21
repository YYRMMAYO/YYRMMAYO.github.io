/* ============================================================
 * YYRMM 的软件库 — 开场动画 & 卡片跳转
 * 依赖 main.js 全局的 softwareList（含 features / shot / key 字段）
 * 纯原生 JS + CSS 动画，无外部依赖
 * ============================================================ */
(function () {
  "use strict";

  const SEEN_KEY = "yyrmm_intro_seen";
  const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const overlay   = document.getElementById("intro-overlay");
  const scenesEl  = document.getElementById("intro-scenes");
  const dotsEl    = document.getElementById("intro-dots");
  const barEl     = document.getElementById("intro-progress-bar");
  const skipBtn   = document.getElementById("intro-skip");

  /* 有 features 的产品用于开场动画（intro === false 的产品排除，如在线游戏） */
  const allSoftware = (typeof softwareList !== "undefined" ? softwareList : []);
  const products = allSoftware.filter(
    (s) => s.intro !== false && s.features && Array.isArray(s.features.items) && s.features.items.length
  );

  /* lang 是 main.js 顶层的全局 let（非 window 属性），读取时做防御 */
  function curLang() {
    return typeof lang !== "undefined" ? lang : "zh";
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------- 开场动画 ---------------- */
  const SCENE_MS = 2400; // 每个产品场景时长
  const END_MS   = 1500; // 结尾欢迎场景时长
  let introTimer = null;

  function buildIntroScenes() {
    const L = curLang() === "en" ? "en" : "zh";
    scenesEl.innerHTML =
      products
        .map(
          (p, i) => `
        <div class="intro-scene" data-scene="${i}">
          <div class="intro-head">
            <span class="intro-icon" style="background:${p.accent}2b;border-color:${p.accent}">${p.icon}</span>
            <div>
              <h2 class="intro-name">${esc(p.name[L])}</h2>
              <p class="intro-tagline">${esc(p.features.tagline[L])}</p>
            </div>
          </div>
          <div class="intro-body">
            ${
              p.shot
                ? `<div class="intro-shot-wrap"><img class="intro-shot" src="${p.shot}" alt="${esc(p.name[L])}" /></div>`
                : `<div class="intro-shot-wrap intro-shot-fallback" style="background:linear-gradient(135deg, ${p.accent}, ${p.accent}99)"><span class="intro-shot-fallback-icon">${p.icon}</span></div>`
            }
            <ul class="intro-features">
              ${p.features.items
                .slice(0, 4)
                .map((f) => `<li>${esc(f[L])}</li>`)
                .join("")}
            </ul>
          </div>
        </div>`
        )
        .join("") +
      `<div class="intro-scene intro-scene-end" data-scene="${products.length}">
        <div class="intro-end-title">${esc(curLang() === "en" ? "YYRMM's Software Library" : "YYRMM 的软件库")}</div>
        <div class="intro-end-sub">${esc(curLang() === "en" ? "Explore my software" : "欢迎探索我的软件作品")}</div>
      </div>`;
    dotsEl.innerHTML = products
      .map((_, i) => `<span class="intro-dot" data-dot="${i}"></span>`)
      .join("");
  }

  function stopIntro() {
    if (introTimer) {
      clearInterval(introTimer);
      introTimer = null;
    }
  }

  function playIntro() {
    if (!products.length || !overlay) return;
    stopIntro();
    buildIntroScenes();
    barEl.style.width = "0%";
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const scenes = scenesEl.querySelectorAll(".intro-scene");
    const dots = dotsEl.querySelectorAll(".intro-dot");

    if (reduced) {
      // 动效减弱：静态展示结尾欢迎场景，点「跳过」关闭
      scenes.forEach((s, k) => s.classList.toggle("active", k === products.length));
      return;
    }

    const total = products.length * SCENE_MS + END_MS;
    const start = Date.now();
    let idx = 0;
    const setScene = (i) => {
      idx = i;
      scenes.forEach((s, k) => s.classList.toggle("active", k === i));
      dots.forEach((d, k) => d.classList.toggle("active", k === i));
    };
    setScene(0);

    introTimer = setInterval(() => {
      const el = Date.now() - start;
      const next = Math.floor(el / SCENE_MS);
      if (next < products.length && next !== idx) setScene(next);
      else if (next >= products.length && idx !== products.length) setScene(products.length);
      barEl.style.width = Math.min(100, (el / total) * 100) + "%";
      if (el >= total) {
        stopIntro();
        finishIntro();
      }
    }, 50);
  }

  function finishIntro() {
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) {}
    barEl.style.width = "100%";
    hideOverlay();
  }

  function hideOverlay() {
    if (!overlay) return;
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  /* ---------------- 卡片跳转到详情页 ----------------
   * 点击卡片标题或缩略图（data-detail）在新窗口打开该软件的详细介绍页；
   * 卡片内的按钮 / 链接点击不触发跳转。 */
  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-detail]");
    if (nav && !e.target.closest("a, button")) {
      window.open("detail/" + nav.dataset.detail + ".html", "_blank", "noopener");
    }
  });

  /* ---------------- 事件绑定 ---------------- */
  document.addEventListener("click", (e) => {
    if (e.target.closest("#intro-replay")) { playIntro(); return; }
    if (e.target.closest("#intro-skip")) { stopIntro(); finishIntro(); return; }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("show")) {
      stopIntro();
      finishIntro();
    }
  });

  /* 首次进入自动播放开场动画（每次会话一次；动效减弱用户跳过） */
  let seen = false;
  try { seen = sessionStorage.getItem(SEEN_KEY) === "1"; } catch (e) {}
  if (!reduced && !seen) {
    // 等待首屏渲染，稍作延迟再播放
    window.addEventListener("load", () => setTimeout(playIntro, 350));
  }
})();
