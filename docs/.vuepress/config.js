module.exports = {
  title: '邱旭备忘录',
  description: '自言自语之地',
  dest: './dist',
  port: '7777',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./nav"),
    sidebar: {
      '/guide/': [
        {
          title: '简历',
          collapsable: true,
          children: [
            '/guide/notes/one',
          ]
        }
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}