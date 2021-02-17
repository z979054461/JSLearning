/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const isValidBSTEx = function (root, lower = -Infinity, upper = Infinity) {
        if (root === null) return true;
        if (root.val <= lower || root.val >= upper) return false;
        //递归时，遍历左子树时更新上界（所有节点都小于根节点），遍历右子树时更新下界（所有节点都大于根节点）
        return isValidBSTEx(root.left, lower, root.val) && isValidBSTEx(root.right, root.val, upper);
    }

    return isValidBSTEx(root);
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 二叉搜索树的中序遍历一定是一个递增序列
 */
var isValidBST = function (root) {
    if(root === null) return true;
    let p = root,q;
    let min = -Infinity;
    const stack = [];
    while(p || stack.length){
        while(p){
            stack.push(p);
            p = p.left;
        }
        q = stack.pop();
        if(q.val <= min){
            return false;
        }else{
            min = q.val;
        }
        p = q.right;
    }
    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end