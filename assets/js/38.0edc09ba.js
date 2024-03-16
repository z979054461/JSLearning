(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{621:function(a,t,e){"use strict";e.r(t);var n=e(4),r=function(a){a.options.__data__block__={mermaid_1a962850:"graph LR\nA(排序) --\x3e B(基本概念)\nA --\x3e C(内部排序)\nA --\x3e D(外部排序)\nB --\x3e E(稳定性)\nB --\x3e F(衡量标准：时间复杂度、空间复杂度)\nC --\x3e G(插入排序)\nC --\x3e H(交换排序)\nC --\x3e I(选择排序)\nC --\x3e J(归并排序)\nC --\x3e K(基数排序)\nD --\x3e L(多路归并排序)\nG --\x3e M(直接插入排序)\nG --\x3e N(折半插入排序)\nG --\x3e O(希尔排序)\nH --\x3e P(冒泡排序)\nH --\x3e Q(快速排序)\nI --\x3e R(选择排序)\nI --\x3e S(堆排序)\n"}},_=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"heading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[a._v("#")]),a._v(" Heading")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#排序的定义"}},[a._v("排序的定义")]),e("ul",[e("li",[e("a",{attrs:{href:"#排序"}},[a._v("排序")])]),e("li",[e("a",{attrs:{href:"#算法的稳定性"}},[a._v("算法的稳定性")])]),e("li",[e("a",{attrs:{href:"#排序算法的分类"}},[a._v("排序算法的分类")])])])])])]),e("p"),a._v(" "),e("Mermaid",{attrs:{id:"mermaid_1a962850",graph:a.$dataBlock.mermaid_1a962850}}),e("h2",{attrs:{id:"排序的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序的定义"}},[a._v("#")]),a._v(" 排序的定义")]),a._v(" "),e("h3",{attrs:{id:"排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[a._v("#")]),a._v(" 排序")]),a._v(" "),e("p",[a._v("排序就是重新排序表中的元素，使表中的元素满足按关键字有序的过程。"),e("br"),a._v("\n一般情况下，内部排序算法都要执行两种操作："),e("code",[a._v("比较")]),a._v("和"),e("code",[a._v("移动")]),a._v("。基数排序不基于比较。")]),a._v(" "),e("h3",{attrs:{id:"算法的稳定性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法的稳定性"}},[a._v("#")]),a._v(" 算法的稳定性")]),a._v(" "),e("p",[a._v("若待排序表中有两个元素R1和R2，对应的关键字相同key1=key2，且排序前R1在R2前面，如果使用某一排序算法之后，R1仍在R2前面，则称这个算法是"),e("code",[a._v("稳定")]),a._v("的，否则称排序算法是"),e("code",[a._v("不稳定")]),a._v("的。\n注意点：")]),a._v(" "),e("ol",[e("li",[a._v("算法是否具有稳定性并不能衡量一个算法的优劣，它主要描述算法的性质。（比如待排序表中关键字不重复，稳定性就无关紧要）")]),a._v(" "),e("li",[a._v("对于不稳定的算法，只需举出一组关键字的实例，即可说明不稳定性。")])]),a._v(" "),e("h3",{attrs:{id:"排序算法的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序算法的分类"}},[a._v("#")]),a._v(" 排序算法的分类")]),a._v(" "),e("ul",[e("li",[a._v("内部排序\n排序期间，元素全部放在内存中的排序。")]),a._v(" "),e("li",[a._v("外部排序\n排序期间元素无法全部同时存放在内存中，必须在排序的过程中不断地内、外存之间移动的排序。")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(_);t.default=_.exports}}]);