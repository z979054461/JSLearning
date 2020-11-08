/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
var leafSimilar = function (root1, root2) {
    const getLeaves = root => {
        const stack = []
        let p = root;
        const ret = []
        while (p || stack.length) {
            if (p) {
                !p.left && !p.right && ret.push(p.val)
                stack.push(p);
                p = p.left;
            } else {
                p = stack.pop();
                p = p.right;
            }
        }
        return ret
    }
    const leaves1 = getLeaves(root1),
        leaves2 = getLeaves(root2);
    if (leaves1.length !== leaves2.length) return false;
    let i = -1;
    while (++i < leaves1.length) {
        if (leaves1[i] !== leaves2[i]) return false
    }
    return true
};
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

