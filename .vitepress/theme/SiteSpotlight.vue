<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const el = document.querySelector('.site-spotlight')
  if (!el) return

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const onMove = (e: MouseEvent) => {
    el.style.opacity = '1'
    el.style.transform = `translate(${e.clientX - 180}px, ${e.clientY - 180}px)`
  }
  const onLeave = () => {
    el.style.opacity = '0'
  }

  window.addEventListener('mousemove', onMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', onLeave)
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMove)
    document.documentElement.removeEventListener('mouseleave', onLeave)
  })
})
</script>

<template>
  <div class="site-spotlight" aria-hidden="true"></div>
</template>
