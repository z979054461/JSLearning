/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const dfs = (lRemain, rRemain, str) => {
        if (str.length === 2 * n) {
        res.push(str)
        return
        }
        if (lRemain > 0) {
        dfs(lRemain - 1, rRemain, str + '(')
        }
        if (rRemain > lRemain) {
        dfs(lRemain, rRemain - 1, str + ')')
        }
    }
    dfs(n, n, '')
    return res
}
// @lc code=end
