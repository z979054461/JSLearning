(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{747:function(s,t,n){"use strict";n.r(t);var a=n(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[s._v("#")]),s._v(" Heading")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul")]),n("p"),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/odd-even-linked-list/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("328.奇偶链表"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("Tags: algorithms linked-list")]),s._v(" "),n("p",[s._v("Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift typescript")]),s._v(" "),n("ul",[n("li",[s._v("algorithms")]),s._v(" "),n("li",[s._v("Medium (63.23%)")]),s._v(" "),n("li",[s._v("Likes: 257")]),s._v(" "),n("li",[s._v("Dislikes: -")]),s._v(" "),n("li",[s._v("Total Accepted: 59.4K")]),s._v(" "),n("li",[s._v("Total Submissions: 93.7K")]),s._v(" "),n("li",[s._v("Testcase Example: '[1,2,3,4,5]'")])]),s._v(" "),n("p",[s._v("给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。")]),s._v(" "),n("p",[s._v("请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1:")])]),s._v(" "),n("pre",[n("strong",[s._v("输入:")]),s._v(" 1->2->3->4->5->NULL\n"),n("strong",[s._v("输出:")]),s._v(" 1->3->5->2->4->NULL\n")]),s._v(" "),n("p",[n("strong",[s._v("示例 2:")])]),s._v(" "),n("pre",[n("strong",[s._v("输入:")]),s._v(" 2->1->3->5->6->4->7->NULL \n"),n("strong",[s._v("输出:")]),s._v(" 2->3->6->7->1->5->4->NULL")]),s._v(" "),n("p",[n("strong",[s._v("说明:")])]),s._v(" "),n("ul",[n("li",[s._v("应当保持奇数节点和偶数节点的相对顺序。")]),s._v(" "),n("li",[s._v("链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\r\n * @lc app=leetcode.cn id=328 lang=javascript\r\n *\r\n * [328] 奇偶链表\r\n */")]),s._v("\r\n\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=start")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.next = (next===undefined ? null : next)\r\n * }\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("oddEvenList")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" oddTail "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("oddTail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ppre "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" oddTail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ppre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" oddTag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//奇数位标记")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("oddTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//奇数删除p并插入到奇数末尾")]),s._v("\r\n            ppre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n            p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" oddTail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n            oddTail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p\r\n            oddTail "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p\r\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//偶数继续前进")]),s._v("\r\n            ppre "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ppre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n        oddTag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("oddTag\r\n        p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ppre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head\r\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=end")]),s._v("\r\n\r\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);