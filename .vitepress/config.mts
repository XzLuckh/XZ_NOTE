import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 项目站点需要带上仓库名；本地开发仍使用根路径。
  base: process.env.GITHUB_ACTIONS ? '/XZ_NOTE/' : '/',
  title: 'XZ_NOTE',
  description: '记录学习、开发与实践的个人技术知识库',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'XZ_NOTE',
    nav: [
      { text: '首页', link: '/' },
      { text: 'SLAM', link: '/SLAM/' },
      { text: 'VLN', link: '/VLN/' },
      { text: '技术文档', link: '/Docs/' },
      { text: 'Linux', link: '/linux/' },
      { text: '编程', link: '/programming/' },
    ],
    sidebar: {
      '/SLAM/': [{
        text: 'SLAM',
        items: [
          { text: '概览', link: '/SLAM/' },
          {
            text: '项目 Projects',
            collapsed: false,
            items: [
              {
                text: '项目总览',
                link: '/SLAM/Projects/',
                collapsed: false,
                items: [
                  { text: 'GO2 + rslidar 16 FAST-SAM', link: '/SLAM/Projects/GO2-rslidar-16-fast-sam/' },
                  { text: 'FAST-LIO2 真机部署 + RTK', link: '/SLAM/Projects/FAST-LIO2-RTK/' },
                  { text: 'PCT + Scan-Planner 导航', link: '/SLAM/Projects/PCT-Scan-Planner/' },
                  { text: 'FAST-LIVO2 复现与重建', link: '/SLAM/Projects/FAST-LIVO2/' },
                  { text: 'FAST-LIO2 有图 / 无图导航', link: '/SLAM/Projects/FAST-LIO2-no-map-navigation/' },
                  { text: 'Cartographer 仿真与真机', link: '/SLAM/Projects/Cartographer/' },
                ]
              }
            ]
          },
          { text: '论文 Paper', link: '/SLAM/Paper/' },
          { text: '学习记录 Study', link: '/SLAM/Study/' }
        ]
      }],
      '/VLN/': [{ text: 'VLN', items: [{ text: '概览', link: '/VLN/' }, { text: 'Study', link: '/VLN/Study/' }] }],
      '/Docs/': [{ text: 'Docs', items: [{ text: '概览', link: '/Docs/' }, { text: '半人型底盘启动', link: '/Docs/半人型底盘启动' },  { text: 'mb导航车配置', link: '/Docs/mb导航车配置文件' }] }],
      '/linux/': [{ text: 'Linux', items: [{ text: '概览', link: '/linux/' }, { text: '常用命令', link: '/linux/commands' }] }],
      '/programming/': [{ text: '编程', items: [{ text: '概览', link: '/programming/' }] }],
    },
    outline: { level: [2, 3] },
    socialLinks: [],
    search: { provider: 'local' },
    footer: { message: '持续记录，持续成长。', copyright: '© 2026 XZ_NOTE' },
  },
})
