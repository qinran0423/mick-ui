const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
      // v1.x这样写
      // items: []
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    {
      text: '数据展示',
      children: [{ text: 'Tree 树', link: '/components/tree/' }]
    },
    { text: '布局' }
  ]
}

const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config(md) {
      // 使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }
}

export default config
