/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const IndexInorder = {};//字符在中序序列中的下标
    inorder.forEach((val, idx) => IndexInorder[val] = idx);
    const n = postorder.length;
    const fn = (postLeft, postRight, inLeft, inRight) => {
        if (postLeft > postRight) return null;
        const p = new TreeNode(postorder[postRight]),//创建根节点
            indexRoot = IndexInorder[postorder[postRight]],//根节点位置
            leftSubTreeSize = indexRoot - inLeft;//左子树长度
        p.left = fn(postLeft, postLeft + leftSubTreeSize -1, inLeft, indexRoot - 1);
        p.right = fn(postLeft + leftSubTreeSize, postRight-1, indexRoot + 1, inRight);
        return p
    }

    return fn(0, n - 1, 0, n - 1);
};
// @lc code=end

