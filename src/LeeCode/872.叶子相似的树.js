/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
 *
 * https://leetcode-cn.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (62.76%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    18.9K
 * Total Submissions: 30.1K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n' +
  '[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 * 
 * 
 * 
 * 举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 
 * 如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
 * 
 * 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 =
 * [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：root1 = [1], root2 = [1]
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 输入：root1 = [1], root2 = [2]
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 输入：root1 = [1,2], root2 = [2,2]
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 
 * 
 * 输入：root1 = [1,2,3], root2 = [1,3,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的两棵树可能会有 1 到 200 个结点。
 * 给定的两棵树上的值介于 0 到 200 之间。
 * 
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// var leafSimilar = function (root1, root2) {
//     const getLeaves = root => {
//         const stack = []
//         let p = root;
//         const ret = []
//         while (p || stack.length) {
//             if (p) {
//                 !p.left && !p.right && ret.push(p.val)
//                 stack.push(p);
//                 p = p.left;
//             } else {
//                 p = stack.pop();
//                 p = p.right;
//             }
//         }
//         return ret
//     }
//     const leaves1 = getLeaves(root1),
//         leaves2 = getLeaves(root2);
//     if (leaves1.length !== leaves2.length) return false;
//     let i = -1;
//     while (++i < leaves1.length) {
//         if (leaves1[i] !== leaves2[i]) return false
//     }
//     return true
// };
var leafSimilar = function (root1, root2) {
    const getLeaves = function* (root) {
        if(!root) return;
        !root.left && !root.right && (yield root.val)
        yield* getLeaves(root.left)
        yield* getLeaves(root.right)
    }
    return [...getLeaves(root1)].join() === [...getLeaves(root2)].join()
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = leafSimilar;
// @after-stub-for-debug-end