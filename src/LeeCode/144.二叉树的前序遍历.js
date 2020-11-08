/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const stack = [];
    const ret = [];
    let p = root
    while(p || stack.length){
        if(p){
            ret.push(p.val)
            stack.push(p)
            p = p.left
        }else{
            p = stack.pop();
            p = p.right;
        }
    }
    return ret
};
// @lc code=end

