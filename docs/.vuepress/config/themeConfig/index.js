const getConfig = require('vuepress-bar')
const locales = require('./locales.js')

const { nav, sidebar } = getConfig(`${process.cwd()}/docs`, { pinyinNav: true }) // Use default location of `.vuepress`: `${__dirname}/..`

module.exports = {
  type: 'HomePageOne',
  logo: '/logo.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  locales,
  // 自动形成侧边导航
  sidebar,
  nav,
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: '、夕月',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2020',
  algolia: {
    apiKey: '97357e58cac743c6de62036cb152f18b',
    indexName: 'vuepress-theme-reco',
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: 'rSECyo1cROa3HdImUdHT20cR-gzGzoHsz',
    appKey: 'dXOH7cT8Wmm045cqzcC4PfkY',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    notify: true, //
    recordIP: true,
    showComment: true,
  },
  // displayAllHeaders: true, // 默认值：false  相当于全部展开
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'https://github.com/z979054461/JSLearning',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  // docsBranch: 'gh-pages',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  codeTheme: 'tomorrow',
}
