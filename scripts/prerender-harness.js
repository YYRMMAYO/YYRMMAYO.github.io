/* ============================================================
 * 预渲染harness — 在 Node 沙箱里跑一遍 assets/js/main.js
 *
 * 目的：让 scripts/prerender.py 拿到「main.js 自己渲染出来的」卡片 HTML 与数据，
 * 而不是在 Python 里再写一套模板 —— 两套模板迟早会不一致。
 *
 * 做法：给 main.js 提供一套最小的 DOM/localStorage 桩，捕获它写进
 * #software-grid / #resource-grid 的 innerHTML，并把数据对象导出为 JSON。
 *
 * 用法：node scripts/prerender-harness.js   （由 prerender.py 调用，输出 JSON 到 stdout）
 * ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const MAIN_JS = path.join(__dirname, "..", "assets", "js", "main.js");
const source = fs.readFileSync(MAIN_JS, "utf8");

/* ---------- 最小 DOM 桩：记录 innerHTML 赋值，其余调用一律吞掉 ---------- */
const captured = {};

function fakeEl(id) {
  return {
    id,
    style: {},
    dataset: {},
    classList: { add() {}, remove() {} },
    set innerHTML(v) { captured[id] = String(v); },
    get innerHTML() { return captured[id] || ""; },
    set textContent(v) {},
    get textContent() { return ""; },
    setAttribute() {},
    getAttribute() { return null; },
    addEventListener() {},
  };
}

const sandbox = {
  console,
  localStorage: { getItem: () => null, setItem() {} },
  navigator: { language: "zh-CN" }, // 预渲染固定出中文（站点默认语言）
  document: {
    documentElement: { lang: "", setAttribute() {} },
    getElementById: (id) => fakeEl(id),
    querySelectorAll: () => [],
    addEventListener() {},
  },
};

sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const ctx = vm.createContext(sandbox);
vm.runInContext(
  source + "\n;globalThis.__EXPORT = { PROFILE, I18N, softwareList, resourceList, STATS, FEATURES };",
  ctx,
  { filename: "main.js" }
);

const data = ctx.__EXPORT;
if (!data || !Array.isArray(data.softwareList)) {
  throw new Error("未能从 main.js 取到 softwareList —— main.js 的顶层结构可能变了");
}

process.stdout.write(
  JSON.stringify({
    data,
    cards: {
      softwareGrid: captured["software-grid"] || "",
      resourceGrid: captured["resource-grid"] || "",
    },
  })
);
