const path = require('path')
const themeConfig = require('./config/themeConfig/')

module.exports = {
    //指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析
    // dest: '.vuepress/dist',
    // base: '/JSLearning/',
    title:'、夕月的博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'reco_luan' }],
        ['meta', { name: 'keywords', content: 'vuepress,reco,reco_luan,vuepress-reco,vuepress-theme-reco,theme,blog,主题' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#42b983' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo-mask.svg', color: '#42b983' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ],
    theme: 'reco',
    themeConfig,
    // locales: {
    //   '/': {
    //     lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    //     title: "vuepress-theme-reco",
    //     description: '一款简洁而优雅的 vuepress 博客 & 文档 主题。'
    //   },
    //   '/en/': {
    //     lang: 'en-US',
    //     title: "vuepress-theme-reco",
    //     description: 'A simple and beautiful vuepress Blog & Doc theme.'
    //   }
    // },
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ],
        [
            '@vuepress/plugin-register-components',
            {
                components: [
                    {
                        name: 'reco-home-page-one',
                        path: path.resolve(__dirname, './components/HomePageOne.vue')
                    }
                ],
                componentsDir: path.resolve(__dirname, './demo')
            }
        ],
        '@vuepress-reco/extract-code',
        [
            'sitemap',
            {
                hostname: 'https://www.yuetianxiang.com'
            }
        ],
        [
            '@vuepress-reco/rss',
            {
                site_url: 'https://www.yuetianxiang.com',
                copyright: ''
            }
        ],
        'permalink-pinyin',
        [
            'autobar',
            { 'pinyinNav': true }
        ],
        'rpurl',
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又好了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，崩溃啦！",
                recoverTime: 2000
            }
        ],
        'vuepress-plugin-mermaidjs',
    ]
}  