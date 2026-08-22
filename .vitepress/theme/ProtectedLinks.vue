<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { isUnlocked, setUnlocked, PASSWORD } from './access'

const props = defineProps<{
  links: { label: string; href: string }[]
}>()

const unlocked = ref(false)
const showForm = ref(false)
const password = ref('')
const error = ref(false)

const reveal = () => {
  unlocked.value = true
  showForm.value = false
  error.value = false
}

onMounted(() => {
  unlocked.value = isUnlocked()
  window.addEventListener('xz-unlocked', reveal)
})
onBeforeUnmount(() => window.removeEventListener('xz-unlocked', reveal))

const submit = () => {
  if (password.value === PASSWORD) {
    setUnlocked()
    window.dispatchEvent(new Event('xz-unlocked'))
    reveal()
  } else {
    error.value = true
  }
}
</script>

<template>
  <div class="protected-links">
    <template v-if="unlocked">
      <a
        v-for="l in links"
        :key="l.href"
        class="protected-links__item"
        :href="l.href"
        target="_blank"
        rel="noreferrer"
      >{{ l.label }} ↗</a>
    </template>
    <template v-else>
      <button v-if="!showForm" type="button" class="protected-links__lock" @click="showForm = true">
        🔒 密码查看
      </button>
      <span v-else class="protected-links__form">
        <input v-model="password" type="password" placeholder="访问密码" @keyup.enter="submit" />
        <button type="button" @click="submit">解锁</button>
      </span>
      <span v-if="error" class="protected-links__error">密码错误</span>
    </template>
  </div>
</template>
