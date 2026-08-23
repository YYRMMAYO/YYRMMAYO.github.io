/* ============================================================
 * YYRMM 的软件库 — 卡片跳转到详情页
 * 点击卡片标题或缩略图（data-detail）在新窗口打开该软件的详细介绍页；
 * 卡片内的按钮 / 链接点击不触发跳转。
 * （开场动画已于 2026-08 移除，保持页面轻量、无全屏遮挡）
 * ============================================================ */
(function () {
  "use strict";

  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-detail]");
    if (nav && !e.target.closest("a, button")) {
      window.open("detail/" + nav.dataset.detail + ".html", "_blank", "noopener");
    }
  });
})();
