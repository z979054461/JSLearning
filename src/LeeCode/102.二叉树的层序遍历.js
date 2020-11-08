/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return [];
    const queue = [root];
    let ret = [], n,
        p, tmp;
    while (queue.length) {
        tmp = []
        n = queue.length//队列总的元素个数恰好是当前层数的元素个数
        for (let i = 0; i < n; i++) {
            p = queue.shift();
            tmp.push(p.val);
            p.left && queue.push(p.left)
            p.right && queue.push(p.right)
        }
        ret.push(tmp);
    }
    return ret;
};
// @lc code=end

