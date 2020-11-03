/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.32%)
 * Likes:    740
 * Dislikes: 0
 * Total Accepted:    125.7K
 * Total Submissions: 183.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const IndexInorder = {};//字符在中序序列中的下标
    inorder.forEach((val, idx) => IndexInorder[val] = idx);
    const n = preorder.length;
    const fn = (preLeft, preRight, inLeft, inRight) => {
        if (preLeft > preRight) return null;
        const p = new TreeNode(preorder[preLeft]),//创建根节点
            indexRoot = IndexInorder[preorder[preLeft]],//根节点位置
            leftSubTreeSize = indexRoot - inLeft;//左子树长度
        p.left = fn(preLeft + 1, preLeft + leftSubTreeSize, inLeft, indexRoot - 1);
        p.right = fn(preLeft + leftSubTreeSize + 1, preRight, indexRoot + 1, inRight);
        return p
    }

    return fn(0, n - 1, 0, n - 1);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end