module.exports = {
    // base: '/JSLearning/',
    title: '夕月',
    description: `努力的意义就是
    以后的日子里放眼望去
    全部都是自己喜欢的人和事`,
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    theme: 'reco',
    themeConfig: {
        searchMaxSuggestions: 10,
        smoothScroll: true,
        lastUpdated: 'Last Updated', // string | boolean 由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。
        nav: [],
        displayAllHeaders: true, // 默认值：false  相当于全部展开
        repo: 'https://github.com/z979054461/JSLearning',
        // repoLabel: 'github',
        editLinks: true,
    },
    markdown: {
        lineNumbers: true
    },
    plugins: ['permalink-pinyin', ['autobar', { 'pinyinNav': true }], 'rpurl'],
    evergreen:true,//禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills
    chainWebpack: (config, isServer) => {
        const inlineLimit = 10000
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: inlineLimit,
                name: `assets/img/[name].[hash:8].[ext]`
            })
    }
}