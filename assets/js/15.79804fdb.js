(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{542:function(e,s,r){},600:function(e,s,r){"use strict";r(542)},609:function(e,s,r){"use strict";r.r(s);r(21),r(33),r(41);var t=[{name:"vuepress-plugin-sponsor",desc:"打赏插件",user:"yokefellow",repo:"vuepress-plugin-sponsor",feature:"feature",scenes:"independent"},{name:"@vuepress-reco/back-to-top",desc:"回到顶部。",user:"vuepress-reco",repo:"vuepress-plugin-back-to-top",feature:"feature",scenes:"independent"},{name:"@vuepress-reco/pagation",desc:"分页。",user:"vuepress-reco",repo:"vuepress-plugin-pagation",feature:"feature",scenes:"develop"},{name:"@vuepress-reco/loading-page",desc:"加载 loading 页。",user:"vuepress-reco",repo:"vuepress-plugin-loading-page",feature:"style",scenes:"develop"},{name:"@vuepress-reco/kan-ban-niang",desc:"看板娘 live2d 动画。",user:"vuepress-reco",repo:"vuepress-plugin-kan-ban-niang",feature:"style",scenes:"develop"},{name:"@vuepress-reco/comments",desc:"评论功能，集成 valine 和 vssue。",user:"vuepress-reco",repo:"vuepress-plugin-comments",feature:"feature",scenes:"develop"},{name:"@vuepress-reco/extract-code",desc:"功能代码展示插件，展示多种语言于一窗，增加易读性。",user:"vuepress-reco",repo:"vuepress-plugin-extract-code",feature:"feature",scenes:"develop"},{name:"@vuepress-reco/bgm-player",desc:"一款简洁的音乐播放器。",user:"vuepress-reco",repo:"vuepress-plugin-bgm-player",feature:"feature",scenes:"independent"},{name:"@vuepress-reco/rss",desc:"生成 RSS 页面。",user:"vuepress-reco",repo:"vuepress-plugin-rss",feature:"feature",scenes:"independent"},{name:"vuepress-plugin-boxx",desc:"为博客文章自动随机添加名人名言或其他，可自定义样式和内容。",user:"zpj80231",repo:"vuepress-plugin-boxx",feature:"feature",scenes:"independent"},{name:"go-top",desc:"回到顶部。",user:"SigureMo",repo:"vuepress-plugin-go-top",feature:"feature",scenes:"independent"},{name:"ribbon",desc:"在您的 Vuepress 中添加美丽的丝带！",user:"SigureMo",repo:"vuepress-plugin-ribbon",feature:"style",scenes:"independent"},{name:"cursor-effects",desc:"在您的 vuepress 中添加可爱的光标效果！",user:"SigureMo",repo:"vuepress-plugin-cursor-effects",feature:"style",scenes:"independent"},{name:"dynamic-title",desc:"在您的 vuepress 中添加动态标题！",user:"SigureMo",repo:"vuepress-plugin-dynamic-title",feature:"style",scenes:"independent"},{name:"dynamic-title",desc:"流程图。",user:"ulivz",repo:"vuepress-plugin-flowchart",feature:"feature",scenes:"independent"},{name:"@vuepress/plugin-medium-zoom",desc:"图片放大。",user:"vuejs",repo:"vuepress/tree/master/packages/@vuepress/plugin-medium-zoom",feature:"feature",scenes:"independent"},{name:"sitemap",desc:"Sitemap 生成器。",user:"ekoeryanto",repo:"vuepress-plugin-sitemap",feature:"feature",scenes:"independent"}],n={data:function(){return{pluginsData:t,feature:"",scenes:"",currentPage:1,screenOptions:[[{label:"全部",value:""},{label:"优化效果",value:"style"},{label:"扩展功能",value:"feature"}],[{label:"全部",value:""},{label:"独立使用",value:"independent"},{label:"开发使用",value:"develop"}]]}},filters:{featureFilter:function(e){return"style"===e?"优化效果":"扩展功能"},scenesFilter:function(e){return"independent"===e?"独立使用":"开发使用"}},computed:{formatData:function(){var e=this.pluginsData,s=this.feature,r=this.scenes;return e.filter((function(e){return""===s&&""===r||""!==s&&""===r&&s===e.feature||""===s&&""!==r&&r===e.scenes||s===e.feature&&r===e.scenes?e:void 0}))},currentPageData:function(){var e=10*this.currentPage-10,s=10*this.currentPage;return this.formatData.slice(e,s)}},methods:{getCurrentPage:function(e){this.currentPage=e,setTimeout((function(){window.scrollTo(0,0)}),100)},screenClick:function(e,s){this[e]=s,this.currentPage=1}}},a=(r(600),r(4)),u=Object(a.a)(n,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"plugins-recommend"},[r("div",{staticClass:"screen"},[r("ul",{staticClass:"screen-wrapper"},[e._m(0),e._v(" "),e._l(e.screenOptions[0],(function(s,t){return r("li",{key:t,staticClass:"screen-item",class:e.feature===s.value?"active":"",on:{click:function(r){return e.screenClick("feature",s.value)}}},[e._v("\n        "+e._s(s.label)+"\n      ")])}))],2),e._v(" "),r("ul",{staticClass:"screen-wrapper"},[e._m(1),e._v(" "),e._l(e.screenOptions[1],(function(s,t){return r("li",{key:t,staticClass:"screen-item",class:e.scenes===s.value?"active":"",on:{click:function(r){return e.screenClick("scenes",s.value)}}},[e._v("\n        "+e._s(s.label)+"\n      ")])}))],2)]),e._v(" "),r("hr",{staticStyle:{"margin-bottom":"1.2rem"}}),e._v(" "),r("div",{staticClass:"plugin-list-wrapper"},e._l(e.currentPageData,(function(s,t){return r("div",{key:t,staticClass:"plugin-item"},[r("div",{staticClass:"info"},[r("h3",{staticClass:"title"},[r("span",{staticClass:"name"},[e._v(e._s(s.name))]),e._v(" "),r("GitHubLink",{staticClass:"link",attrs:{repo:s.user+"/"+s.repo}})],1),e._v(" "),r("p",{staticClass:"desc"},[r("span",{staticClass:"tag"},[e._v(e._s(e._f("featureFilter")(s.feature)))]),e._v(" "),r("span",{staticClass:"tag"},[e._v(e._s(e._f("scenesFilter")(s.scenes)))]),r("br"),e._v("\n          "+e._s(s.desc)+"\n        ")])])])})),0),e._v(" "),r("pagation",{staticClass:"pagation",attrs:{total:e.formatData.length,currentPage:e.currentPage},on:{getCurrentPage:e.getCurrentPage}})],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("li",[s("h4",[this._v("插件功能：")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("li",[s("h4",[this._v("使用场景：")])])}],!1,null,"11c9cbf6",null);s.default=u.exports}}]);