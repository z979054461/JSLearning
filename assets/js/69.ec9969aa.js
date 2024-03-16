(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{673:function(t,e,r){"use strict";r.r(e);var a=r(4),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"heading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[t._v("#")]),t._v(" Heading")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#前言"}},[t._v("前言")])]),r("li",[r("a",{attrs:{href:"#url-从输入到页面展示的过程"}},[t._v("URL 从输入到页面展示的过程")])]),r("li",[r("a",{attrs:{href:"#dom-和-javascript-的关系"}},[t._v("DOM 和 JavaScript 的关系")])]),r("li",[r("a",{attrs:{href:"#为什么操作-dom-会很慢"}},[t._v("为什么操作 DOM 会很慢")])]),r("li",[r("a",{attrs:{href:"#浏览器渲染-html-的步骤"}},[t._v("浏览器渲染 HTML 的步骤")])]),r("li",[r("a",{attrs:{href:"#重排-relayout-reflow"}},[t._v("重排（Relayout/Reflow）")])]),r("li",[r("a",{attrs:{href:"#重绘-repainting"}},[t._v("重绘（Repainting）")])]),r("li",[r("a",{attrs:{href:"#关于重排的优化"}},[t._v("关于重排的优化")])])])]),r("p"),t._v(" "),r("p",[t._v("参考链接：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.imooc.com/article/45936",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化：细说浏览器渲染的重排与重绘"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.google.com/speed/docs/insights/browser-reflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("尽可能减少浏览器重排"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档对象模型 (DOM)"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"/JS/reFLow.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("ul",[r("li",[t._v("重排：当改变 DOM 元素位置或大小时，会导致浏览器重新生成渲染树，这个过程叫重排。")]),t._v(" "),r("li",[t._v("重绘：当重新生成渲染树后，就要将渲染树每个节点绘制到屏幕，这个过程叫重绘。不是所有的动作都会导致重排，例如改变字体颜色，只会导致重绘。记住，重排会导致重绘，重绘不会导致重排 。")])]),t._v(" "),r("p",[t._v("重排和重绘这两个操作都是非常昂贵的，因为 "),r("strong",[t._v("JavaScript 引擎线程与 GUI 渲染线程是互斥，它们同时只能一个在工作")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"url-从输入到页面展示的过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url-从输入到页面展示的过程"}},[t._v("#")]),t._v(" URL 从输入到页面展示的过程")]),t._v(" "),r("blockquote",[r("p",[t._v("在探讨浏览器解析 html 之前，先了解 url 从输入到最后页面渲染的过程是一个很有必要的步骤，它可以帮助我们把握整体流程，让我们在了解 HTML 解析细节之前知道它处于整个请求周期中的哪一阶段，这对我们构建完善知识图谱很有帮助。")])]),t._v(" "),r("p",[t._v("首先，我们假设输入的 url 的请求为最简单的 Http 请求，以 GET 请求为例，大致分以下几个步骤：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("用户在浏览器的地址栏输入访问的 URL 地址。浏览器会先根据这个 URL 查看"),r("code",[t._v("浏览器缓存-系统缓存-路由器缓存")]),t._v("，若缓存中有，直接跳到第 6 步操作，若没有，则按照下面的步骤进行操作。")])]),t._v(" "),r("li",[r("p",[t._v("浏览器根据输入的 URL 地址"),r("code",[t._v("解析出主机名")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("浏览器将主机名转换成服务器 ip 地址。浏览器先查找"),r("code",[t._v("本地DNS缓存")]),t._v("列表，看缓存里面是否存在这个 ip,如果有则进入第 4 步，如果缓存中不存在这个 ip 地址，就再向浏览器默认的"),r("code",[t._v("DNS服务器")]),t._v("发送查询请求，同时缓存当前这个 ip 到 DNS 缓存列表中。更详细步骤参考"),r("a",{attrs:{href:"https://www.cnblogs.com/xsilence/p/6035559.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS 查找域名的过程"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("拿到 ip 地址后，浏览器再从 URL 中"),r("code",[t._v("解析出端口号")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("拿到 ip 和端口后，浏览器会建立一条与目标 Web 服务器的"),r("a",{attrs:{href:"https://www.cnblogs.com/xsilence/p/6034361.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 连接"),r("OutboundLink")],1),t._v("，也就是传说中的三次握手。")])]),t._v(" "),r("li",[r("p",[t._v("浏览器向服务器发送一条 HTTP 请求报文。")])]),t._v(" "),r("li",[r("p",[t._v("服务器向浏览器返回一条 HTTP 响应报文。")])]),t._v(" "),r("li",[r("p",[t._v("关闭连接 浏览器解析文档。")])]),t._v(" "),r("li",[r("p",[t._v("如果文档中有资源则重复 6、7、8 动作，直至资源全部加载完毕。")])])]),t._v(" "),r("h2",{attrs:{id:"dom-和-javascript-的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom-和-javascript-的关系"}},[t._v("#")]),t._v(" DOM 和 JavaScript 的关系")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("文档对象模型 (DOM)")]),t._v("将 web 页面与到脚本或编程语言连接起来。通常是指 "),r("code",[t._v("JavaScript")]),t._v("，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点(node)，每个节点都包含着对象(objects)。DOM 的方法(methods)让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。")])]),t._v(" "),r("blockquote",[r("p",[t._v("我们现在知道，DOM 是一个独立于语言的 API，换句话说，DOM 是一个与语言无关的 API，别的语言也可以实现操作 DOM 的具体 api，但是它在浏览器中是用 JavaScript 来实现的，也因此，DOM 是现在 JavaScript 编码中很重要的一部分，因为 JavaScript 很多时候都在操作底层文档。")])]),t._v(" "),r("h2",{attrs:{id:"为什么操作-dom-会很慢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么操作-dom-会很慢"}},[t._v("#")]),t._v(" 为什么操作 DOM 会很慢")]),t._v(" "),r("blockquote",[r("p",[t._v("虽然 DOM 是由 JavaScript 实现的，但是在浏览器中都是把"),r("code",[t._v("DOM和JavaScript分开来实现")]),t._v("的，比如 IE 中，JavaScript 的实现名为 JScript，放在 jscript.dll 文件中，而 DOM 则放在另一个叫做 mshtml.dll 的库中。在 Safari 中，DOM 和渲染是使用 Webkit 中的 WebCore 实现，而 JavaScript 是由独立的 JavaScriptCore 引擎实现，同样在 Chrome 中，同样是使用 WebCore 来实现渲染，而 JavaScript 引擎则是他们自己研发的 V8 引擎。")])]),t._v(" "),r("blockquote",[r("p",[t._v("由于 DOM 和 JavaScript 是被分开独立实现的，因此，每一次在通过 js 操作 DOM 的时候，就需要先去连接 js 和 DOM，我们可以这样理解：把 DOM 和 JavaScript 比作两个岛，他们之间通过一个收费的桥连接着，每一次访问 DOM 的时候，就需要经过这座桥，并且给“过路费”，访问的次数越多，路费就会越高，并且访问到 DOM 后，操作具体的 DOM 还需要给“操作费”，由于浏览器访问 DOM 的操作很多，因此，“路费”和“操作费”自然会增加，这就是为什么操作 DOM 会很慢的原因")])]),t._v(" "),r("h2",{attrs:{id:"浏览器渲染-html-的步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染-html-的步骤"}},[t._v("#")]),t._v(" 浏览器渲染 HTML 的步骤")]),t._v(" "),r("p",[t._v("HTML 渲染大致分为如下几步：")]),t._v(" "),r("ol",[r("li",[t._v("HTML 被 HTML 解析器解析成"),r("strong",[t._v("DOM Tree")]),t._v(", css 则被 css 解析器解析成"),r("strong",[t._v("CSSOM Tree")]),t._v("。")]),t._v(" "),r("li",[t._v("DOM Tree 和 CSSOM Tree 解析完成后，被附加到一起，形成渲染树（"),r("strong",[t._v("Render Tree")]),t._v("）。")]),t._v(" "),r("li",[t._v("节点信息计算(重排)，这个过程被叫做"),r("strong",[t._v("Layout")]),t._v("(Webkit)或者"),r("strong",[t._v("Reflow")]),t._v("(Mozilla)。即根据渲染树计算每个节点的几何信息。")]),t._v(" "),r("li",[t._v("渲染绘制(重绘)，这个过程被叫做(Painting 或者 Repaint)。即根据计算好的信息绘制整个页面。")])]),t._v(" "),r("p",[t._v("以上 4 步简述浏览器的一次渲染过程，理论上，每一次的 dom 更改或者 css 几何属性更改，都会引起一次浏览器的"),r("code",[t._v("重排/重绘")]),t._v("过程，而如果是 "),r("em",[t._v("css 的非几何属性更改，则只会引起重绘过程")]),t._v("。所以说"),r("strong",[t._v("重排一定会引起重绘，而重绘不一定会引起重排")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"重排-relayout-reflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重排-relayout-reflow"}},[t._v("#")]),t._v(" 重排（Relayout/Reflow）")]),t._v(" "),r("p",[t._v("在弄明白什么是重排之前，我们要知道：浏览器渲染页面默认采用的是"),r("strong",[t._v("流式布局模型（Flow Based Layout）")]),t._v("，这一点很重要。")]),t._v(" "),r("p",[t._v("所谓重排，实际上是根据渲染树中每个渲染对象的信息，计算出各自渲染对象的几何信息（DOM对象的位置和尺寸大小），并将其安置在界面中的正确位置。")]),t._v(" "),r("p",[t._v("由于浏览器渲染界面是基于流式布局模型的，也就是某一个DOM节点信息更改了，就需要对DOM结构进行重新计算，重新布局界面，再次引发回流，只是这个结构更改程度会决定周边DOM更改范围，即全局范围和局部范围，全局范围就是从根节点html开始对整个渲染树进行重新布局，例如当我们改变了窗口尺寸或方向或者是修改了根元素的尺寸或者字体大小等；而局部布局可以是对渲染树的某部分或某一个渲染对象进行重新布局。")]),t._v(" "),r("p",[t._v("在此，总结会引起重排的操作有：")]),t._v(" "),r("ol",[r("li",[t._v("页面首次渲染。")]),t._v(" "),r("li",[t._v("浏览器窗口大小发生改变。")]),t._v(" "),r("li",[t._v("元素尺寸或位置发生改变。")]),t._v(" "),r("li",[t._v("元素内容变化（文字数量或图片大小等等）。")]),t._v(" "),r("li",[t._v("元素字体大小变化。")]),t._v(" "),r("li",[t._v("添加或者删除可见的DOM元素。")]),t._v(" "),r("li",[t._v("激活CSS伪类（例如：:hover）。")]),t._v(" "),r("li",[t._v("设置style属性")]),t._v(" "),r("li",[t._v("查询某些属性或调用某些方法。")])]),t._v(" "),r("p",[t._v("常见的引起重排的属性和方法：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("width height margin padding display border position overflow clientWidth clientHeight clientTop clientLeft offsetWidth offsetHeight offsetTop offsetLeft scrollWidth scrollHeight scrollTop scrollLeft scrollIntoView() scrollTo() getComputedStyle() getBoundingClientRect() scrollIntoViewIfNeeded()\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("blockquote",[r("p",[r("strong",[t._v("重排也叫回流")]),t._v("，实际上，reflow的字面意思也是回流，之所以有的叫做重排，也许是因为重排更好理解，更符合中国人的思维。标准文档之所以叫做回流（Reflow）,是因为浏览器渲染是基于“流式布局”的模型，流实际就使我们常说的文档流，当dom或者css几何属性发生改变的时候，文档流会受到波动联动的去更改，流就好比一条河里的水，回流就好比向河里扔了一块石头，激起涟漪，然后引起周边水流受到波及，所以叫做回流，这样理解似乎更标准更规范，不过叫什么并不重要，重要的是我们真正理解了这个过程便好。")])]),t._v(" "),r("h2",{attrs:{id:"重绘-repainting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repainting"}},[t._v("#")]),t._v(" 重绘（Repainting）")]),t._v(" "),r("p",[t._v("相比重排，重绘就简单多了，所谓重绘，就是当页面中元素样式的改变并不影响它在文档流中的位置时，例如更改了字体颜色,浏览器会将新样式赋予给元素并重新绘制的过程。")]),t._v(" "),r("p",[t._v("常见引起浏览器绘制过程的属性包含：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("color border-style visibility background text-decoration background-image background-position background-repeat outline-color outline outline-style border-radius outline-width box-shadow background-size\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h2",{attrs:{id:"关于重排的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于重排的优化"}},[t._v("#")]),t._v(" 关于重排的优化")]),t._v(" "),r("p",[t._v("下面是一些简单的准则，可帮助您尽可能缩短在网页中进行重排的用时：")]),t._v(" "),r("ol",[r("li",[t._v("减少不必要的 DOM 深度。在 DOM 树中的一个级别进行更改可能会致使该树的所有级别（上至根节点，下至所修改节点的子级）都随之变化。这会导致花费更多的时间来执行重排。")]),t._v(" "),r("li",[t._v("尽可能减少 CSS 规则的数量，并移除未使用的 CSS 规则。\n如果您想进行复杂的渲染更改（例如动画），请在流程外执行此操作。您可以使用 position-absolute 或 position-fixed 来实现此目的。")]),t._v(" "),r("li",[t._v("避免使用不必要且复杂的 CSS 选择器（尤其是后代选择器），因为此类选择器需要耗用更多的 CPU 处理能力来执行选择器匹配。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);