(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{537:function(t,r,s){},592:function(t,r,s){"use strict";s(537)},625:function(t,r,s){"use strict";s.r(r);s(142),s(9);var n={props:{showTitle:{type:Boolean,default:!1},user:{type:String,require:!0},repo:{type:String,require:!0}},data:function(){return{contributors:[]}},mounted:function(){this.getContributors()},methods:{getContributors:function(){var t=this,r=this.user,s=this.repo,n="https://api.github.com/repos/".concat(r,"/").concat(s,"/contributors");fetch(n).then((function(t){return t.json()})).then((function(r){t.contributors=r}))}}},o=(s(592),s(4)),i=Object(o.a)(n,(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"contributors-wrapper"},[t.showTitle?s("h3",{staticClass:"contributors-title"},[t._v("\r\n    "+t._s(t.repo)+"\r\n    "),s("GitHubLink",{attrs:{repo:t.user+"/"+t.repo}})],1):t._e(),t._v(" "),t.contributors.length?s("ul",{staticClass:"contributors-list"},t._l(t.contributors,(function(r,n){return s("li",{key:n,staticClass:"contributors-item"},[s("a",{attrs:{href:r.html_url}},[s("img",{staticClass:"avatar",attrs:{src:r.avatar_url,alt:r.login}}),t._v(" "),s("a",{staticClass:"name"},[t._v(t._s(r.login))])])])})),0):t._e()])}),[],!1,null,"b42c66ce",null);r.default=i.exports}}]);