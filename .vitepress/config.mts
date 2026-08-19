import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XZ_NOTE",
  description: "我的技术学习笔记",
  
  base: '/XZ_NOTE/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Linux', link: '/linux/' },
      { text: '编程', link: '/programming/' }
    ],

    sidebar: [
      {
        text: 'Linux',
        items: [
          { text: 'Linux 首页', link: '/linux/' },
          { text: '常用命令', link: '/linux/commands' }
        ]
      },
      {
        text: '编程',
        items: [
          { text: '编程笔记', link: '/programming/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XzLuckh/XZ_NOTE' }
    ]
  }
})
