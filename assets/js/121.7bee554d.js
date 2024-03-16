(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{725:function(t,s,n){"use strict";n.r(s);var a=n(4),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"heading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heading"}},[t._v("#")]),t._v(" Heading")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul")]),n("p"),t._v(" "),n("p",[t._v("[106.从中序与后序遍历序列构造二叉树] https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/")]),t._v(" "),n("p",[t._v("Tags:   algorithms   microsoft   array   tree   depth-first-search")]),t._v(" "),n("p",[t._v("Langs:  c   cpp   csharp   golang   java   javascript   kotlin   php   python   python3   ruby   rust   scala   swift   typescript")]),t._v(" "),n("ul",[n("li",[t._v("algorithms")]),t._v(" "),n("li",[t._v("Medium (70.72%)")]),t._v(" "),n("li",[t._v("Likes:    410")]),t._v(" "),n("li",[t._v("Dislikes: -")]),t._v(" "),n("li",[t._v("Total Accepted:    78.8K")]),t._v(" "),n("li",[t._v("Total Submissions: 111.3K")]),t._v(" "),n("li",[t._v("Testcase Example:  '[9,3,15,20,7]\\n[9,15,7,20,3]'")])]),t._v(" "),n("p",[t._v("根据一棵树的中序遍历与后序遍历构造二叉树。")]),t._v(" "),n("p",[n("strong",[t._v("注意:")]),n("br"),t._v("\n你可以假设树中没有重复的元素。")]),t._v(" "),n("p",[t._v("例如，给出")]),t._v(" "),n("pre",[t._v("中序遍历 inorder = [9,3,15,20,7]\n后序遍历 postorder = [9,15,7,20,3]")]),t._v(" "),n("p",[t._v("返回如下的二叉树：")]),t._v(" "),n("pre",[t._v("    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\r\n * @lc app=leetcode.cn id=106 lang=javascript\r\n *\r\n * [106] 从中序与后序遍历序列构造二叉树\r\n */")]),t._v("\r\n\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @lc code=start")]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val) {\r\n *     this.val = val;\r\n *     this.left = this.right = null;\r\n * }\r\n */")]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\r\n * @param {number[]} inorder\r\n * @param {number[]} postorder\r\n * @return {TreeNode}\r\n */")]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("buildTree")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("inorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postorder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" IndexInorder "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符在中序序列中的下标")]),t._v("\r\n    inorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" IndexInorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" postorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("postLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postRight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inRight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" postRight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("postRight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建根节点")]),t._v("\r\n            indexRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IndexInorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("postorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("postRight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根节点位置")]),t._v("\r\n            leftSubTreeSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" indexRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" inLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//左子树长度")]),t._v("\r\n        p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" leftSubTreeSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indexRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n        p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" leftSubTreeSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postRight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indexRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inRight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p\r\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n\r\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @lc code=end")]),t._v("\r\n\r\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);