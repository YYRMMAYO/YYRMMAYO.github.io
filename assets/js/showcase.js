/* ============================================================
 * YYRMM 的软件库 — 开场动画 & 功能展示弹窗
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
  const modal     = document.getElementById("feature-modal");
  const modalBody = document.getElementById("modal-content");

  /* 有 features 的产品用于开场动画；byKey 收录全部软件用于详情弹窗 */
  const allSoftware = (typeof softwareList !== "undefined" ? softwareList : []);
  const products = allSoftware.filter(
    (s) => s.features && Array.isArray(s.features.items) && s.features.items.length
  );
  const byKey = {};
  allSoftware.forEach((p) => (byKey[p.key] = p));

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

  function i18n(key) {
    return typeof t === "function" ? t(key) : key;
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

  /* ---------------- 功能展示弹窗 ---------------- */
  function openFeature(key) {
    const p = byKey[key];
    if (!p) return;
    const L = curLang() === "en" ? "en" : "zh";
    const tagline = p.features && p.features.tagline ? p.features.tagline[L] : "";
    const items = p.features && Array.isArray(p.features.items) ? p.features.items : [];
    const shotHtml = p.shot
      ? `<div class="modal-shot-wrap"><img class="modal-shot" src="${p.shot}" alt="${esc(p.name[L])}" /></div>`
      : "";
    const featuresHtml = items.length
      ? `<ul class="modal-features">${items
          .map(
            (f, i) =>
              `<li class="modal-feature" style="animation-delay:${140 + i * 100}ms">
                 <span class="mf-dot" style="background:${p.accent}"></span>
                 <span>${esc(f[L])}</span>
               </li>`
          )
          .join("")}</ul>`
      : "";
    const linksHtml = typeof renderLinks === "function" ? renderLinks(p.links) : "";
    const taglineHtml = tagline ? `<p class="modal-tagline">${esc(tagline)}</p>` : "";

    modalBody.dataset.key = key;
    modalBody.innerHTML = `
      <div class="modal-accent" style="background:linear-gradient(90deg, ${p.accent}, ${p.accent}22)"></div>
      <div class="modal-head">
        <span class="modal-icon" style="background:${p.accent}26;border:1px solid ${p.accent}">${p.icon}</span>
        <div class="modal-head-text">
          <h3 class="modal-name">${esc(p.name[L])}</h3>
          ${taglineHtml}
        </div>
      </div>
      <h4 class="modal-desc-title">${esc(i18n("detailIntro"))}</h4>
      <p class="modal-desc">${esc(p.desc[L])}</p>
      ${shotHtml}
      ${featuresHtml}
      ${linksHtml ? `<div class="modal-actions">${linksHtml}</div>` : ""}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  /* ---------------- 事件绑定 ---------------- */
  document.addEventListener("click", (e) => {
    const featureBtn = e.target.closest("[data-feature-key]");
    if (featureBtn) { openFeature(featureBtn.dataset.featureKey); return; }
    if (e.target.closest("#intro-replay")) { playIntro(); return; }
    if (e.target.closest("#intro-skip")) { stopIntro(); finishIntro(); return; }
    if (e.target.closest("[data-close]")) { closeModal(); return; }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("open")) closeModal();
      else if (overlay && overlay.classList.contains("show")) { stopIntro(); finishIntro(); }
    }
  });

  /* 暴露给 main.js：语言切换时刷新打开的弹窗 */
  window.Showcase = {
    refreshOpen() {
      if (modal && modal.classList.contains("open") && modalBody.dataset.key) {
        openFeature(modalBody.dataset.key);
      }
    },
  };

  /* 首次进入自动播放开场动画（每次会话一次；动效减弱用户跳过） */
  let seen = false;
  try { seen = sessionStorage.getItem(SEEN_KEY) === "1"; } catch (e) {}
  if (!reduced && !seen) {
    // 等待首屏渲染，稍作延迟再播放
    window.addEventListener("load", () => setTimeout(playIntro, 350));
  }
})();
