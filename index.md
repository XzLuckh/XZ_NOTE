---
layout: home
---

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const ROLE_TEXT = '把遇到的问题，变成可复用的答案'

onMounted(() => {
  // 首页固定，禁止滚轮滚动
  document.body.style.overflow = 'hidden'

  const cover = document.querySelector('.home-cover')
  const glow = document.querySelector('.home-cover__spotlight')
  const role = document.querySelector('.home-cover__role')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // 鼠标跟随光斑
  if (cover && glow && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduced) {
    const onMove = (e) => {
      const r = cover.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      glow.style.opacity = '1'
      glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }
    const onLeave = () => { glow.style.opacity = '0' }
    cover.addEventListener('mousemove', onMove)
    cover.addEventListener('mouseleave', onLeave)
    onBeforeUnmount(() => {
      cover.removeEventListener('mousemove', onMove)
      cover.removeEventListener('mouseleave', onLeave)
    })
  }

  // 标语：从左到右逐个出现，停顿，再从右到左逐个消失，循环
  if (role) {
    if (reduced) {
      role.textContent = ROLE_TEXT
    } else {
      let visible = 0
      let phase = 'typing' // typing -> hold -> deleting -> typing ...
      let hold = 0
      let timer = 0

      const tick = () => {
        if (phase === 'typing') {
          visible += 1
          role.textContent = ROLE_TEXT.slice(0, visible)
          if (visible >= ROLE_TEXT.length) { phase = 'hold'; hold = 12 }
        } else if (phase === 'hold') {
          hold -= 1
          if (hold <= 0) phase = 'deleting'
        } else {
          visible -= 1
          role.textContent = ROLE_TEXT.slice(0, visible)
          if (visible <= 0) phase = 'typing'
        }
        timer = window.setTimeout(tick, phase === 'typing' ? 110 : phase === 'deleting' ? 90 : 110)
      }

      role.textContent = ''
      tick()
      onBeforeUnmount(() => window.clearTimeout(timer))
    }
  }

  onBeforeUnmount(() => { document.body.style.overflow = '' })
})
</script>

<div class="home-cover">
  <div class="home-cover__spotlight" aria-hidden="true"></div>
  <div class="home-cover__glow" aria-hidden="true"></div>
  <img class="home-cover__avatar" src="/头像.png" alt="XZ_NOTE 头像" />
  <h1 class="home-cover__name">XZ_NOTE</h1>
  <p class="home-cover__role">把遇到的问题，变成可复用的答案</p>
  <nav class="home-cover__links">
    <a href="/SLAM/">SLAM</a>
    <a href="/linux/">Linux</a>
    <a href="/programming/">编程</a>
    <a href="/VLN/">VLN</a>
    <a href="/Docs/">文档</a>
  </nav>
  <div class="home-cover__foot">持续记录，持续成长 · © 2026 XZ_NOTE</div>
</div>
