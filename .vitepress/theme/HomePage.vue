<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const ROLE_TEXT = '把遇到的问题，变成可复用的答案'
const roleText = ref(ROLE_TEXT)
let roleTimer: ReturnType<typeof setTimeout> | undefined

const navItems = [
  ['SLAM', '/SLAM/'],
  ['Linux', '/linux/'],
  ['编程', '/programming/'],
  ['VLN', '/VLN/'],
  ['文档', '/Docs/']
]

const stats = [
  ['6+', 'SLAM 项目'],
  ['5+', '论文笔记'],
  ['4', '知识板块'],
  ['∞', '持续学习']
]

const projects = [
  {
    title: 'PCT + Scan-Planner 融合导航',
    description: '复现 PCT 三维全局规划与 SCAN-Planner 局部规划，融合进导航链路完成联调 Demo。',
    link: '/SLAM/Projects/PCT-Scan-Planner/',
    featured: true
  },
  {
    title: 'FAST-LIVO2 场景重建',
    description: '复现 FAST-LIVO2，在自建仿真环境验证建图，并运行两组 Bag 数据完成场景重建。',
    link: '/SLAM/Projects/FAST-LIVO2/'
  },
  {
    title: 'FAST-LIO2 无图导航',
    description: '在自建仿真环境中运行 FAST-LIO2，验证建图并跑通有图导航与无图导航流程。',
    link: '/SLAM/Projects/FAST-LIO2-no-map-navigation/'
  }
]

const categories = [
  { icon: '◎', name: 'SLAM', meta: 'MAPPING / LOCALIZATION', description: '激光雷达、视觉 SLAM 的项目实践与论文阅读，沉淀主流算法的部署经验。', link: '/SLAM/' },
  { icon: '◈', name: 'VLN', meta: 'VISION / LANGUAGE', description: '从基础论文到仿真实验，探索语言指令到机器人行动的完整链路。', link: '/VLN/' },
  { icon: '⌁', name: 'Linux', meta: 'SYSTEM / TOOLING', description: '系统配置、常用命令与服务运维实践，整理成可靠的工程速查手册。', link: '/linux/' },
  { icon: '〈〉', name: '编程', meta: 'CODE / ENGINEERING', description: '记录 Python、C++ 在机器人开发中的工程实践、工具与踩坑心得。', link: '/programming/' }
]

const updates = [
  ['2026.08', 'SCAN-Planner 论文阅读笔记', '论文', '/SLAM/Paper/2026-scan-planner/'],
  ['2026.07', 'FAST-LIVO2 论文精读', '论文', '/SLAM/Paper/2024-fast-livo2/'],
  ['2026.06', '半人型底盘启动指南', '文档', '/Docs/半人型底盘启动/'],
  ['2026.05', 'Linux 常用命令速查', '教程', '/linux/commands/']
]

const scrollToContent = () => {
  document.querySelector('#home-content')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start'
  })
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let visible = 0
  let phase: 'typing' | 'hold' | 'deleting' = 'typing'
  let hold = 0

  const tick = () => {
    if (phase === 'typing') {
      visible += 1
      if (visible >= ROLE_TEXT.length) {
        visible = ROLE_TEXT.length
        phase = 'hold'
        hold = 12
      }
    } else if (phase === 'hold') {
      hold -= 1
      if (hold <= 0) phase = 'deleting'
    } else {
      visible -= 1
      if (visible <= 0) {
        visible = 0
        phase = 'typing'
      }
    }

    roleText.value = ROLE_TEXT.slice(0, visible)
    roleTimer = setTimeout(tick, phase === 'typing' ? 110 : phase === 'deleting' ? 90 : 110)
  }

  roleText.value = ''
  tick()
})

onBeforeUnmount(() => clearTimeout(roleTimer))
</script>

<template>
  <main class="home-page">
    <section class="home-cover" aria-labelledby="home-title">
      <div class="home-cover__grid" aria-hidden="true"></div>
      <div class="home-cover__glow" aria-hidden="true"></div>

      <p class="home-cover__eyebrow">PERSONAL KNOWLEDGE SYSTEM <span>／</span> 2026</p>
      <div class="home-cover__portrait">
        <span class="home-cover__portrait-index">01</span>
        <img class="home-cover__avatar" src="/头像.png" alt="XZ_NOTE 头像" />
        <span class="home-cover__portrait-status"><i></i> documenting</span>
      </div>
      <h1 id="home-title" class="home-cover__name">XZ_NOTE</h1>
      <p class="home-cover__role">{{ roleText }}</p>
      <p class="home-cover__intro">机器人 · 视觉导航 · 工程实践</p>

      <nav class="home-cover__links" aria-label="知识板块">
        <a v-for="([label, link]) in navItems" :key="link" :href="link">{{ label }}</a>
      </nav>

      <button class="home-cover__scroll" type="button" @click="scrollToContent">
        <span>向下滚动探索更多</span>
        <i aria-hidden="true"></i>
      </button>
      <p class="home-cover__foot">持续记录，持续成长 · © 2026 XZ_NOTE</p>
    </section>

    <div id="home-content" class="home-content">
      <section class="home-stats" aria-label="知识库数据">
        <div v-for="([number, label]) in stats" :key="label" class="stat-card">
          <strong>{{ number }}</strong>
          <span>{{ label }}</span>
        </div>
      </section>

      <section class="home-section">
        <header class="section-header">
          <p>FEATURED PROJECTS · 精选项目</p>
          <h2>核心项目展示</h2>
        </header>
        <div class="featured-grid">
          <a v-for="project in projects" :key="project.link" :href="project.link" class="featured-card" :class="{ 'featured-card--highlight': project.featured }">
            <span class="card-badge">已完成</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <span class="card-link">查看详情 <b>↗</b></span>
          </a>
        </div>
      </section>

      <section class="home-section">
        <header class="section-header">
          <p>EXPLORE · 探索内容</p>
          <h2>知识板块</h2>
        </header>
        <div class="categories-grid">
          <a v-for="category in categories" :key="category.link" :href="category.link" class="category-card">
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-meta">{{ category.meta }}</span>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </a>
        </div>
      </section>

      <section class="home-section home-recent">
        <header class="section-header">
          <p>LATEST UPDATES · 最近更新</p>
          <h2>最新笔记</h2>
        </header>
        <div class="recent-list">
          <a v-for="([date, title, tag, link]) in updates" :key="link" :href="link" class="recent-item">
            <time>{{ date }}</time>
            <span>{{ title }}</span>
            <em>{{ tag }}</em>
            <b aria-hidden="true">→</b>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./home.css"></style>