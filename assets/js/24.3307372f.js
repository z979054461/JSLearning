(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{633:function(_,v,n){"use strict";n.r(v);var t=n(4),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,n=_._self._c||v;return n("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[n("h1",{attrs:{id:"heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[_._v("#")]),_._v(" Heading")]),_._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#算法的基本概念"}},[_._v("算法的基本概念")])]),n("li",[n("a",{attrs:{href:"#算法效率的度量"}},[_._v("算法效率的度量")]),n("ul",[n("li",[n("a",{attrs:{href:"#时间复杂度"}},[_._v("时间复杂度")])]),n("li",[n("a",{attrs:{href:"#空间复杂度"}},[_._v("空间复杂度")])])])])])]),n("p"),_._v(" "),n("h2",{attrs:{id:"算法的基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法的基本概念"}},[_._v("#")]),_._v(" 算法的基本概念")]),_._v(" "),n("p",[_._v("算法是对特定问题求解步骤的一种描述，它是指令的有限序列，其中的每条指令表示一个或多个操作。包含5个重要特性：")]),_._v(" "),n("ol",[n("li",[n("strong",[_._v("有穷性")]),_._v("\n一个算法必须总在执行有穷步之后结束，且每一步都可在有穷时间内完成。")]),_._v(" "),n("li",[n("strong",[_._v("确定性")]),_._v("\n算法中每条指令必须有确切的含义，对于相同的输入只能得出相同的输出。")]),_._v(" "),n("li",[n("strong",[_._v("可行性")]),_._v("\n算法中描述的操作都可以通过已经实现的基本运算执行有限次来实现。")]),_._v(" "),n("li",[n("strong",[_._v("输入")]),_._v("\n一个算法有零个或多个输入，这些输入取自于某个特定的对象的集合。")]),_._v(" "),n("li",[n("strong",[_._v("输出")]),_._v("\n一个算法有一个或多个输出，这些输出是与输入有着某种特定关系的量。")])]),_._v(" "),n("p",[n("strong",[_._v("通常一个好的算法应考虑达到以下目标")]),_._v("：")]),_._v(" "),n("ol",[n("li",[n("strong",[_._v("正确性")]),_._v("\n正确解决问题。")]),_._v(" "),n("li",[n("strong",[_._v("可读性")]),_._v("\n开发人员容易理解。")]),_._v(" "),n("li",[n("strong",[_._v("健壮性")]),_._v("\n输出非法数据时，算法能适当地作出反应或进行处理，而不是产生莫名其妙的输出结果。")]),_._v(" "),n("li",[n("strong",[_._v("效率与低存储量需求")]),_._v("\n效率是指算法执行的时间，存储量需求是指算法执行过程中所需要的最大存储空间，这两者都与问题的规模相关。")])]),_._v(" "),n("h2",{attrs:{id:"算法效率的度量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法效率的度量"}},[_._v("#")]),_._v(" 算法效率的度量")]),_._v(" "),n("h3",{attrs:{id:"时间复杂度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[_._v("#")]),_._v(" 时间复杂度")]),_._v(" "),n("p",[_._v("一个语句的频度是指该语句在算法中被重复执行的次数。算法中所有语句的频度之和记为 "),n("em",[_._v("T(n)")]),_._v("，它是该算法问题规模n的函数，时间复杂度主要分析 "),n("em",[_._v("T(n)")]),_._v(" 的"),n("strong",[_._v("数量级")]),_._v("。算法中基本运算（最深层循环内的语句）的频度与 "),n("em",[_._v("T(n)")]),_._v(" 同数量级，因此通常采用算法中基本运算的频度 "),n("em",[_._v("f(n)")]),_._v(" 来分析算法的时间复杂度。记为："),n("br"),_._v(" "),n("em",[_._v("T(n) = O(f(n))")])]),_._v(" "),n("ul",[n("li",[_._v("O： "),n("em",[_._v("T(n)")]),_._v(" 的数量级。")]),_._v(" "),n("li",[_._v("最坏时间复杂度：最坏情况下，算法的时间复杂度。")]),_._v(" "),n("li",[_._v("平均时间复杂度：所有可能输入实例在等概率出现的情况下，算法的期望运行时间。")]),_._v(" "),n("li",[_._v("最好时间复杂度：最好情况下，算法的时间复杂度。\n一般总是考虑最坏时间复杂度，以保证算法的运行时间不会比它更长。分析时有以下两条规则：")])]),_._v(" "),n("ol",[n("li",[_._v("加法规则"),n("br"),_._v(" "),n("em",[_._v("T(n) = T1(n) + T2(n) = O(f(n)) + O(g(n)) = O(max(f(n),g(n)))")])]),_._v(" "),n("li",[_._v("乘法规则"),n("br"),_._v(" "),n("em",[_._v("T(n) = T1(n) * T2(n) = O(f(n)) * O(g(n)) = O(f(n) * g(n))")])])]),_._v(" "),n("p",[_._v("常用的渐进时间复杂度"),n("br"),_._v(" "),n("strong",[_._v("O(1) < O(log_2n) < O(n) < O(nlog_2n) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)")])]),_._v(" "),n("h3",{attrs:{id:"空间复杂度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[_._v("#")]),_._v(" 空间复杂度")]),_._v(" "),n("p",[_._v("空间复杂度S(n)定义为该算法所耗费的存储空间，它是问题规模n的函数，记为：\n"),n("em",[_._v("S(n) = O(g(n))")])]),_._v(" "),n("p",[_._v("一个算法在执行时除需要存储空间来存放本身所用的指令、常数、变量和输入数据外，还需要一些对数据进行操作的工作单元和存储一些为实现计算所需要信息的辅助空间。若输入数据所占用空间只取决于问题本身，和算法无关，则只需要分析"),n("strong",[_._v("除输入和程序之外的额外空间")]),_._v("。"),n("br"),_._v(" "),n("strong",[_._v("算法原地工作")]),_._v("是指算法所需要的辅助空间为常量，即O(1)。")])])}),[],!1,null,null,null);v.default=r.exports}}]);