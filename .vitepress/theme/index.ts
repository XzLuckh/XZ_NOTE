import DefaultTheme from 'vitepress/theme'
import { h, defineComponent, computed } from 'vue'
import { useData } from 'vitepress'
import PasswordGate from './PasswordGate.vue'
import ProtectedLinks from './ProtectedLinks.vue'
import SiteSpotlight from './SiteSpotlight.vue'
import { isUnlocked } from './access'
import './style.css'

const withDocsPassword = {
  ...DefaultTheme,
  Layout: defineComponent({
    setup() {
      const { page } = useData()

      const isIndexPage = (path: string, prefix: string) => {
        return path === `${prefix}/index.md` || path === `${prefix}/index` || path === `${prefix}/`
      }

      const isProtectedPage = computed(() => {
        const relativePath = page.value.relativePath || ''
        const normalized = relativePath.replace(/\\/g, '/').trim()

        // Docs 子页面受保护（总览公开）
        if (normalized.startsWith('Docs/')) {
          return !isIndexPage(normalized, 'Docs')
        }

        // SLAM 项目详情页受保护（项目总览公开）
        if (normalized.startsWith('SLAM/Projects/')) {
          return !isIndexPage(normalized, 'SLAM/Projects')
        }

        return false
      })

      return () => {
        if (isProtectedPage.value && !isUnlocked()) {
          return h(PasswordGate)
        }

        // 全局鼠标跟随光斑 + 默认布局
        return [h(SiteSpotlight), h(DefaultTheme.Layout)]
      }
    }
  }),
  enhanceApp({ app }) {
    // 公开页面上受保护的仓库 / 视频链接
    app.component('ProtectedLinks', ProtectedLinks)
  }
}

export default withDocsPassword
