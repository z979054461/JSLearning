/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    const stack = [];
    let p = root, pre = null;
    const ret = [];
    while (p || stack.length) {
        if (p) {
            stack.push(p);
            p = p.left;
        } else {
            p = stack.pop();
            if (!p.right || p.right === pre) {//没有右子树或刚访问过右子树
                ret.push(p.val);
                pre = p;
                p = null;
            } else {//有右子树并且没有访问
                stack.push(p);//当前节点入栈
                stack.push(p.right);//右子树入栈
                p = p.right.left;//转向右子树的左子树
            }
        }
    }
    return ret
};
// @lc code=end

