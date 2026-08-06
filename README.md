# 我的软件 — 个人软件展示静态网站

中英双语、现代简约风格的静态网站，用于展示你开发的软件。零依赖、零构建，纯 HTML/CSS/JS，可直接托管到 **GitHub Pages**，使用 GitHub 提供的免费域名。

## 文件结构

```
├── index.html            # 页面骨架
├── assets/
│   ├── css/style.css     # 样式（现代简约、响应式）
│   └── js/main.js        # 双语切换 + 软件卡片渲染（数据都在这里）
└── README.md             # 本文档
```

## 本地预览

```powershell
cd F:\WEB
python -m http.server 8000
```

浏览器打开 <http://localhost:8000> 即可预览。

## 修改软件列表

所有软件数据都在 `assets/js/main.js` 顶部的 `softwareList` 数组中：

1. **删除 3 个示例条目**，复制其中任意一个结构，填入你自己的软件信息；
2. 每个条目包含：图标 `icon`、双语名称 `name`、双语简介 `desc`、标签 `tags`、链接 `links`、主题色 `accent`；
3. `links.download` 填该软件 **GitHub 仓库详情页地址**——访客点击"下载"按钮会跳转到该页面下载（一般把安装包/源码放到仓库的 Releases 里）；`links.website` 可填官网等其他页面；不需要的链接留空 `""`，对应按钮会自动隐藏；
3. 想用真实截图替换渐变色块：在 `index.html` 的卡片模板里，把 `.card-thumb` 的背景样式换成 `<img>` 截图（截图放入 `assets/images/`，用相对路径引用）。

站点名称等文案在 `CONFIG` / `I18N` 中修改。

## 部署到 GitHub Pages（免费域名）

### 前提

- 已注册 GitHub 账号（假设用户名为 `yourname`）
- 本机已安装 git 并配置好用户名/邮箱

### 第一步：创建 GitHub 仓库

登录 GitHub → 右上角 **+** → **New repository**：

- Repository name 填 **`yourname.github.io`**（把 `yourname` 换成你的真实用户名，**必须完全一致**，这是免费域名的来源）
- 选择 **Public**（免费版要求公开；也可建其他名字的私有仓库，但域名会变成 `yourname.github.io/仓库名/`）
- 不要勾选 "Add a README"（避免冲突）

### 第二步：推送网站文件

在本地 `F:\WEB` 目录打开终端，执行：

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourname/yourname.github.io.git
git push -u origin main
```

> 推送时若提示输入用户名密码，用你的 GitHub 用户名 + Personal Access Token（在 GitHub → Settings → Developer settings → Personal access tokens 生成，勾选 `repo` 权限）。推荐装 [GitHub CLI](https://cli.github.com/) 后用 `gh auth login` 登录，免去手动输密码。

### 第三步：启用 GitHub Pages

1. 进入仓库页面 → **Settings** → 左侧 **Pages**
2. **Build and deployment** → Source 选 **Deploy from a branch**
3. Branch 选 **main**，目录选 **/ (root)** → **Save**

等 1~2 分钟，打开 **`https://yourname.github.io`** 即上线 🎉

### 之后每次更新

修改文件后推送即可自动更新：

```powershell
git add .
git commit -m "update"
git push
```

## 常见问题

| 问题 | 解决 |
|---|---|
| 图片/样式不显示 | 确保所有路径是**相对路径**（`assets/...`，不要写 `/assets/...`），仓库名带前缀时也能正常加载 |
| 想绑定自己的域名 | 在仓库 Settings → Pages → Custom domain 填域名，并把域名解析成 CNAME 指向 `yourname.github.io`（需先购买域名，非必须） |
| 语言切换不生效 | 浏览器缓存问题，强刷（Ctrl+F5）即可；语言偏好存在 localStorage，会记住你的选择 |
