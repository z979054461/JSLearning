(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{501:function(t,e,r){"use strict";var n=r(2),s=r(145),a=r(58),i=r(17),o=r(18),c=r(146),u=r(82),l=r(81),f=r(31),p=l("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,m=Math.min;n({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,e){var r,n,l,f,p,h,g=o(this),_=i(g.length),v=s(t,_),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=_-v):(r=w-2,n=m(d(a(e),0),_-v)),_+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=c(g,n),f=0;f<n;f++)(p=v+f)in g&&u(l,f,g[p]);if(l.length=n,r<n){for(f=v;f<_-n;f++)h=f+r,(p=f+n)in g?g[h]=g[p]:delete g[h];for(f=_;f>_-n+r;f--)delete g[f-1]}else if(r>n)for(f=_-n;f>v;f--)h=f+r-1,(p=f+n-1)in g?g[h]=g[p]:delete g[h];for(f=0;f<r;f++)g[f+v]=arguments[f+2];return g.length=_-n+r,l}})},539:function(t,e,r){},594:function(t,e,r){t.exports=r.p+"assets/img/yesterday.8e49f298.svg"},595:function(t,e,r){t.exports=r.p+"assets/img/today.484a4d22.svg"},596:function(t,e,r){t.exports=r.p+"assets/img/tomorrow.81f0b143.svg"},597:function(t,e,r){"use strict";r(539)},628:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:r(594),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:r(595),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:r(596),alt:""}})])}],s=(r(142),r(44),r(85),r(154),r(59),r(105),r(33),r(501),r(43),r(265),r(9),r(264),r(34),r(103),r(35),r(42),r(275),r(45),r(153),r(98)),a={data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created:function(){console.log(this.$frontmatter)},methods:{toThousandslsFilter:function(t){var e=String(t);if(""===e||null==e)return"";var r=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,n=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+r||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))+n},npmPackageDownloads:function(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},_getDownloadsOfDateRange:function(t,e){var r=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var s,a,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=0,!Array.isArray(e)){n.next=9;break}return a=[],e.map((function(e){a.push(r._fetch(t,e))})),n.next=6,Promise.all(a);case 6:return i=n.sent,s=i.reduce((function(t,e){return t+e.downloads}),0),n.abrupt("return",s);case 9:return n.next=11,r._fetch(t,e);case 11:return o=n.sent,s=o.downloads,n.abrupt("return",s);case 14:case"end":return n.stop()}}),n)})))()},_fetch:function(t,e){var r=this;return new Promise((function(n,s){fetch("".concat("https://api.npmjs.org/downloads/point/").concat(e,"/").concat(t)).then(r._parseJSON).then((function(t){n(t)})).catch((function(t){s(t)}))}))},_parseJSON:function(t){return t.json()},_handleDateRange:function(t){if(t.indexOf(":")>-1){var e=t.split(":"),r=e,n=new Date(e[1]).getTime()-new Date(e[0]).getTime(),s=parseInt(n/31536e6);if(s>0){for(var a=0;a<s;a++){var i=this._getDate(r[a]);r.splice(a+1,0,i)}for(var o=0,c=r.length;o<c-1;o++)r[o]="".concat(r[o],":").concat(r[o+1]);return r.length=s+1,r}return t}return t},_getDate:function(t){var e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:function(t){return Array.isArray(t)?"-,".concat(t.join(",")):t}}},i=(r(597),r(4)),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"home-page-one-wrapper"},[r("section",{staticClass:"main"},[r("div",[t.$frontmatter.heroImage?r("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e(),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.$description))]),t._v(" "),r("router-link",{staticClass:"btn-about",attrs:{to:t.$frontmatter.actionLink}},[t._v(t._s(t.$frontmatter.actionText))])],1)]),t._v(" "),r("section",{staticClass:"wish yesterday"},[r("div",{staticClass:"wish-inner"},[t._m(0),t._v(" "),r("div",{staticClass:"text-wrapper"},[r("h1",[t._v(t._s(t.features[0].title))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.features[0].details))])])])]),t._v(" "),r("section",{staticClass:"wish today"},[r("div",{staticClass:"wish-inner"},[r("div",{staticClass:"text-wrapper"},[r("h1",[t._v(t._s(t.features[1].title))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.features[1].details))])]),t._v(" "),t._m(1)])]),t._v(" "),r("section",{staticClass:"wish tomorrow"},[r("div",{staticClass:"wish-inner"},[t._m(2),t._v(" "),r("div",{staticClass:"text-wrapper"},[r("h1",[t._v(t._s(t.features[2].title))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.features[2].details))])])])]),t._v(" "),r("section",{staticClass:"md-content-wrapper"},[r("Content")],1)])}),n,!1,null,"7ecaf5f6",null);e.default=o.exports}}]);