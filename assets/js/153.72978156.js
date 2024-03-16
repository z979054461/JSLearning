(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{755:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"heading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[s._v("#")]),s._v(" Heading")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul")]),a("p"),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("82.删除排序链表中的重复元素-ii"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Tags:   algorithms   linked-list")]),s._v(" "),a("p",[s._v("Langs:  c   cpp   csharp   golang   java   javascript   kotlin   php   python   python3   ruby   rust   scala   swift   typescript")]),s._v(" "),a("ul",[a("li",[s._v("algorithms")]),s._v(" "),a("li",[s._v("Medium (49.74%)")]),s._v(" "),a("li",[s._v("Likes:    410")]),s._v(" "),a("li",[s._v("Dislikes: -")]),s._v(" "),a("li",[s._v("Total Accepted:    76.4K")]),s._v(" "),a("li",[s._v("Total Submissions: 153.3K")]),s._v(" "),a("li",[s._v("Testcase Example:  '[1,2,3,3,4,4,5]'")])]),s._v(" "),a("p",[s._v("给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 "),a("em",[s._v("没有重复出现 ")]),s._v("的数字。")]),s._v(" "),a("p",[a("strong",[s._v("示例 1:")])]),s._v(" "),a("pre",[a("strong",[s._v("输入:")]),s._v(" 1->2->3->3->4->4->5\n"),a("strong",[s._v("输出:")]),s._v(" 1->2->5\n")]),s._v(" "),a("p",[a("strong",[s._v("示例 2:")])]),s._v(" "),a("pre",[a("strong",[s._v("输入:")]),s._v(" 1->1->1->2->3\n"),a("strong",[s._v("输出:")]),s._v(" 2->3")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\r\n * @lc app=leetcode.cn id=82 lang=javascript\r\n *\r\n * [82] 删除排序链表中的重复元素 II\r\n */")]),s._v("\r\n\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=start")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val) {\r\n *     this.val = val;\r\n *     this.next = null;\r\n * }\r\n */")]),s._v("\r\n\r\n\r\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("deleteDuplicates")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" hair "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    hair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tmpVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmpVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除相同元素的节点")]),s._v("\r\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" tmpVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n                q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n            p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q\r\n            tmpVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//更新p、q和当前值")]),s._v("\r\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q\r\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n            tmpVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" hair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法二：hash记录元素的出现次数")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法三：尾插法新建链表")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=end")]),s._v("\r\n\r\n\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @after-stub-for-debug-begin")]),s._v("\r\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" deleteDuplicates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @after-stub-for-debug-end")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);