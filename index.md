---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XZ_NOTE"
  text: "把遇到的问题，变成可复用的答案"
  tagline: 一个持续生长的个人技术知识库 · Linux · 编程 · 工具实践
  image:
    src: /头像.png
    alt: XZ_NOTE 头像
  actions:
    - theme: brand
      text: 开始阅读
      link: /linux/
    - theme: alt
      text: 浏览 Markdown 示例
      link: /markdown-examples

features:
  - icon: ◈
    title: 系统化整理
    details: 将零散的学习记录沉淀成清晰、可检索的知识路径。
  - icon: ⌘
    title: 实战优先
    details: 记录真实开发中的命令、配置、排错过程与经验总结。
  - icon: ↗
    title: 持续更新
    details: 每一次提交，都是给未来的自己留下一份更好的说明书。
---

<div class="home-dashboard">
  <div class="dashboard-heading">
    <div><span class="eyebrow">EXPLORE THE KNOWLEDGE BASE</span><h2>从这里开始探索</h2></div>
    <span class="status-dot"><i></i> 持续更新中</span>
  </div>

  <div class="topic-grid">
    <a class="topic-card topic-card--accent" href="/linux/">
      <div class="topic-icon">⌘_</div><div class="topic-card__body"><span class="topic-kicker">01 / SYSTEM</span><h3>Linux &amp; 系统</h3><p>从常用命令到服务配置，建立可靠的系统操作习惯。</p><span class="topic-link">进入专题 <b>→</b></span></div>
    </a>
    <a class="topic-card" href="/programming/">
      <div class="topic-icon">&lt;/&gt;</div><div class="topic-card__body"><span class="topic-kicker">02 / BUILD</span><h3>编程与开发</h3><p>编程语言、开发实践与那些值得反复回看的思考。</p><span class="topic-link">进入专题 <b>→</b></span></div>
    </a>
    <a class="topic-card" href="/markdown-examples">
      <div class="topic-icon">✦</div><div class="topic-card__body"><span class="topic-kicker">03 / TOOLS</span><h3>工具与写作</h3><p>Markdown 能力与文档工作流，让知识表达更高效。</p><span class="topic-link">查看示例 <b>→</b></span></div>
    </a>
  </div>

  <div class="terminal-note"><span class="terminal-dots"><i></i><i></i><i></i></span><code><em>~/xz_note</em> $ echo "keep learning, keep building"</code></div>
</div>
