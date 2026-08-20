<script setup lang="ts">
import { ref } from 'vue'
import { PASSWORD, setUnlocked } from './access'

const password = ref('')
const error = ref(false)

const submit = () => {
  if (password.value === PASSWORD) {
    setUnlocked()
    window.location.reload()
    return
  }

  error.value = true
}
</script>

<template>
  <div class="docs-password-wrap">
    <div class="docs-password-panel">
      <div class="docs-password-badge">Restricted Access</div>
      <div class="docs-password-title">内容访问控制</div>
      <p class="docs-password-subtitle">此页面为受保护内容，请输入密码后继续查看。解锁后 1 小时内免输入，过期需重新验证。</p>

      <div class="docs-password-input-wrap">
        <input
          v-model="password"
          type="password"
          placeholder="请输入访问密码"
          autocomplete="current-password"
          @keyup.enter="submit"
        />
      </div>

      <button @click="submit">确认访问</button>

      <p v-if="error" class="docs-password-error">密码错误，请重新输入。</p>
    </div>
  </div>
</template>
