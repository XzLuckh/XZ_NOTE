<div class="slam-hero">
  <p class="slam-eyebrow">REPRODUCE · SIMULATE · DEPLOY</p>
  <h1>SLAM 学习空间</h1>
  <p class="slam-lead">这里沉淀我在 SLAM 方向的学习内容：项目实战、论文阅读与学习记录三大板块，把每一次复现、验证与部署都变成可复用的经验。</p>
</div>

<div class="slam-board">
  <div class="slam-card">
    <h3>📁 项目 Projects</h3>
    <p>记录我做过的 SLAM 项目：仿真实验、真机部署、算法复现，附截图、演示视频与代码仓库。</p>
    <a class="more-link" href="/SLAM/Projects/">进入项目板块 <b>→</b></a>
  </div>
  <div class="slam-card">
    <h3>📄 论文 Paper</h3>
    <p>SLAM 相关论文的阅读笔记：核心方法、实验结论与个人思考，沉淀成可检索的清单。</p>
    <a class="more-link" href="/SLAM/Paper/">进入论文板块 <b>→</b></a>
  </div>
  <div class="slam-card">
    <h3>📖 学习记录 Study</h3>
    <p>理论学习、开源框架复现、工具链使用与踩坑记录，让零散知识变成体系。</p>
    <a class="more-link" href="/SLAM/Study/">进入学习板块 <b>→</b></a>
  </div>
</div>

## 图片使用规范

在 md 文档中插入图片，请遵循以下约定：

### 方式一：项目 / 文章配图（推荐）

图片放在**与 md 文档同级的 `images/` 文件夹**中，使用**相对路径**引用：

```
SLAM/Projects/GO2-rslidar-16-fast-sam/
├── index.md
└── images/
    └── demo.webp            ← 图片放这里
```

```markdown
![仿真效果](./images/demo.webp)
```

<div class="note-box">
<b>推荐理由：</b>图片跟着文档走，项目文件夹可以整体拷贝 / 分享，互不干扰。每个项目文件夹下已建好 <code>images/</code> 目录，直接放图即可。
</div>

### 方式二：全站共享图片

跨板块通用的图片（头像、logo、公共素材）放在根目录的 `public/images/` 中，使用**绝对路径**引用：

```
public/images/
└── slam-logo.png
```

```markdown
![SLAM 图标](/images/slam-logo.png)
```

<div class="note-box">
<b>注意：</b><code>public/</code> 目录的内容会被原样复制到站点根目录，所以引用时以 <code>/</code> 开头。
</div>

### 补充说明

- 支持格式：`png` / `jpg` / `jpeg` / `webp` / `gif` / `svg`
- 文件名建议用**英文或数字**命名（如 `fastlio2-pipeline.webp`），避免中文 / 空格带来的链接问题
- 大图片建议压缩后再上传，控制页面加载速度
- 新增图片后，本地开发时刷新页面即可看到（若没变化，重启 `npm run docs:dev`）

## 快速上手

<ol class="steps">
  <li><b>写项目：</b>在 <code>SLAM/Projects/&lt;项目名&gt;/</code> 下写 <code>index.md</code>，配图放同级 <code>images/</code></li>
  <li><b>读论文：</b>复制 <code>SLAM/Paper/</code> 中的笔记模板，每篇一个 md 文件</li>
  <li><b>记学习：</b>按专题在 <code>SLAM/Study/</code> 下建文件，记完更新列表</li>
  <li><b>更新侧边栏：</b>新页面建好后，在 <code>.vitepress/config.mts</code> 的 <code>sidebar</code> 中加上链接</li>
</ol>
