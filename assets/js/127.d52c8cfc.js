(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{728:function(s,t,n){"use strict";n.r(t);var a=n(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[s._v("#")]),s._v(" Heading")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul")]),n("p"),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/reorder-list/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("143.重排链表"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("Tags: algorithms linked-list")]),s._v(" "),n("p",[s._v("Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift typescript")]),s._v(" "),n("ul",[n("li",[s._v("algorithms")]),s._v(" "),n("li",[s._v("Medium (56.58%)")]),s._v(" "),n("li",[s._v("Likes: 424")]),s._v(" "),n("li",[s._v("Dislikes: -")]),s._v(" "),n("li",[s._v("Total Accepted: 64.7K")]),s._v(" "),n("li",[s._v("Total Submissions: 108.9K")]),s._v(" "),n("li",[s._v("Testcase Example: '[1,2,3,4]'")])]),s._v(" "),n("p",[s._v("给定一个单链表 "),n("em",[s._v("L")]),s._v("："),n("em",[s._v("L")]),n("sub",[s._v("0")]),s._v("→"),n("em",[s._v("L")]),n("sub",[s._v("1")]),s._v("→…→"),n("em",[s._v("L")]),n("sub",[n("em",[s._v("n")]),s._v("-1")]),s._v("→"),n("em",[s._v("L")]),n("sub",[s._v("n ，")]),n("br"),s._v("\n将其重新排列后变为： "),n("em",[s._v("L")]),n("sub",[s._v("0")]),s._v("→"),n("em",[s._v("L")]),n("sub",[n("em",[s._v("n")])]),s._v("→"),n("em",[s._v("L")]),n("sub",[s._v("1")]),s._v("→"),n("em",[s._v("L")]),n("sub",[n("em",[s._v("n")]),s._v("-1")]),s._v("→"),n("em",[s._v("L")]),n("sub",[s._v("2")]),s._v("→"),n("em",[s._v("L")]),n("sub",[n("em",[s._v("n")]),s._v("-2")]),s._v("→…")]),s._v(" "),n("p",[s._v("你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1:")])]),s._v(" "),n("pre",[s._v("给定链表 1->2->3->4, 重新排列为 1->4->2->3.")]),s._v(" "),n("p",[n("strong",[s._v("示例 2:")])]),s._v(" "),n("pre",[s._v("给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\r\n * @lc app=leetcode.cn id=143 lang=javascript\r\n *\r\n * [143] 重排链表\r\n */")]),s._v("\r\n\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=start")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.next = (next===undefined ? null : next)\r\n * }\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * @param {ListNode} head\r\n * @return {void} Do not return anything, modify head in-place instead.\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("reorderList")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" first "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" second "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//拆分")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        first "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        second "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" hair "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    first "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//反转第二段")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        hair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q\r\n        q "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//合并")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        q "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p\r\n        first "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=end")]),s._v("\r\n\r\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);