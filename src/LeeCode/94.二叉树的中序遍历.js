/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (73.85%)
 * Likes:    755
 * Dislikes: 0
 * Total Accepted:    288.2K
 * Total Submissions: 389.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
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
// var inorderTraversal = function (root) {
//     if (root === null) return []
//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// };
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


// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end