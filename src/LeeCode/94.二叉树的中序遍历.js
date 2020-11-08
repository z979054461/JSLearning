/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
var inorderTraversal = function (root) {
    if (root === null) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
var inorderTraversal = function (root) {
    let ret = [],
        stack = [], p = root;
    while (p || stack.length) {
        if (p) {
            stack.push(p);
            p = p.left;
        } else {
            p = stack.pop();
            ret.push(p.val);
            p = p.right;
        }
    }
    return ret;
};
// @lc code=end

