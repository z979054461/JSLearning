(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{729:function(s,t,n){"use strict";n.r(t);var a=n(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[s._v("#")]),s._v(" Heading")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul")]),n("p"),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("144.二叉树的前序遍历"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("Tags: algorithms stack tree")]),s._v(" "),n("p",[s._v("Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift typescript")]),s._v(" "),n("ul",[n("li",[s._v("algorithms")]),s._v(" "),n("li",[s._v("Medium (67.14%)")]),s._v(" "),n("li",[s._v("Likes: 446")]),s._v(" "),n("li",[s._v("Dislikes: -")]),s._v(" "),n("li",[s._v("Total Accepted: 222.3K")]),s._v(" "),n("li",[s._v("Total Submissions: 324.9K")]),s._v(" "),n("li",[s._v("Testcase Example: '[1,null,2,3]'")])]),s._v(" "),n("p",[s._v("给你二叉树的根节点 "),n("code",[s._v("root")]),s._v(" ，返回它节点值的 "),n("strong",[s._v("前序")]),n("em"),s._v("遍历。")]),s._v(" "),n("p"),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("img",{staticStyle:{width:"202px",height:"324px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg"}}),s._v(" "),n("pre",[n("strong",[s._v("输入：")]),s._v("root = [1,null,2,3]\n"),n("strong",[s._v("输出：")]),s._v("[1,2,3]\n")]),s._v(" "),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("pre",[n("strong",[s._v("输入：")]),s._v("root = []\n"),n("strong",[s._v("输出：")]),s._v("[]\n")]),s._v(" "),n("p",[n("strong",[s._v("示例 3：")])]),s._v(" "),n("pre",[n("strong",[s._v("输入：")]),s._v("root = [1]\n"),n("strong",[s._v("输出：")]),s._v("[1]\n")]),s._v(" "),n("p",[n("strong",[s._v("示例 4：")])]),s._v(" "),n("img",{staticStyle:{width:"202px",height:"202px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg"}}),s._v(" "),n("pre",[n("strong",[s._v("输入：")]),s._v("root = [1,2]\n"),n("strong",[s._v("输出：")]),s._v("[1,2]\n")]),s._v(" "),n("p",[n("strong",[s._v("示例 5：")])]),s._v(" "),n("img",{staticStyle:{width:"202px",height:"202px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg"}}),s._v(" "),n("pre",[n("strong",[s._v("输入：")]),s._v("root = [1,null,2]\n"),n("strong",[s._v("输出：")]),s._v("[1,2]\n")]),s._v(" "),n("p"),s._v(" "),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[s._v("树中节点数目在范围 "),n("code",[s._v("[0, 100]")]),s._v(" 内")]),s._v(" "),n("li",[n("code",[s._v("-100 <= Node.val <= 100")])])]),s._v(" "),n("p"),s._v(" "),n("p",[n("strong",[s._v("进阶：")]),s._v("递归算法很简单，你可以通过迭代算法完成吗？")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\r\n * @lc app=leetcode.cn id=144 lang=javascript\r\n *\r\n * [144] 二叉树的前序遍历\r\n */")]),s._v("\r\n\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=start")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * @param {TreeNode} root\r\n * @return {number[]}\r\n */")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("preorderTraversal")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stack "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n            ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\r\n            stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\r\n            p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left\r\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n            p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n            p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ret\r\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=end")]),s._v("\r\n\r\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);