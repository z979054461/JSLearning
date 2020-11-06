module.exports = {
    base: '/JSLearning/',
    title: '夕月的笔记',
    description: `努力的意义就是
    以后的日子里放眼望去
    全部都是自己喜欢的人和事`,
    theme: 'reco',//reco  vue(坏的)
    themeConfig: {
        searchMaxSuggestions: 10,
        smoothScroll: true,
        lastUpdated: 'Last Updated', // string | boolean 由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。
        nav: [{
            text: 'Home',
            link: '/'
        },
        {
            text: '目录',
            link: '/00其他/'
        },
        {
            text: '百度',
            link: 'https://www.baidu.com'
        },
        {
            text: '学习',
            items: [
                {
                    text: 'ES6',
                    link: 'http://es6.ruanyifeng.com/'
                },
                {
                    text: 'Lodash',
                    link: 'https://www.html.cn/doc/lodash/'
                },
                {
                    text: 'TS',
                    link: 'https://jkchao.github.io/typescript-book-chinese/'
                }
            ]
        },
        {
            text: '主类别',
            ariaLabel: 'Language Menu',
            items: [{
                text: '类别1',
                link: 'https://www.baidu.com'
            },
            {
                text: '类别2',
                link: 'https://www.baidu.com'
            },
            {
                text: '类别3',
                link: 'https://www.baidu.com'
            },
            {
                text: '类别4',
                items: [{
                    text: '子类1',
                    link: 'https://www.baidu.com'
                },
                {
                    text: '子类2',
                    link: 'https://www.baidu.com'
                },
                ]
            },
            ]
        },

        ],
        // displayAllHeaders: true, // 默认值：false  相当于全部展开
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/z979054461/JSLearning',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
    },
    plugins: ['permalink-pinyin', ['autobar', { 'pinyinNav': true }], 'rpurl'],
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