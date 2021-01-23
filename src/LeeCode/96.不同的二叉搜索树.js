/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
// 核心思想：给定序列 1 …… n，我们选择数字 ii 作为根，则根为 ii 的所有二叉搜索树的集合是左子树集合和右子树集合的笛卡尔积，对于笛卡尔积中的每个元素，加上根节点之后形成完整的二叉搜索树
// 0   1
// 1   1       1
// 2   2       f(1) + f(1)
// 3   5       f(2) + f(1)*f(1) + f(2)
// 4   14      f(3) + f(1)*f(2) + f(2)*f(1) + f(3)
// 5   42      f(4) + f(1)*f(3) + f(2)*f(2) + f(3)*f(1) + f(4)
// 6   132     
// 卡特兰数 卧槽……
// C(n/2n)/n+1
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let ret = 1;
    for(let i = 2*n;i>=1;i--)
        ret = (i<=n)?ret/i:ret*i;
    return ret /(n+1)
};
// var numTrees = function (n) {
//     let ret = 1n;
//     n = BigInt(n);
//     for (let i = 2n * n; i >= 1n; i--)
//         ret = (i <= n) ? ret / i : ret * i;
//     return ret / (n + 1n)
// };
// @lc code=end

