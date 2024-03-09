/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 动态规划
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }

    let begin = 0
    let maxLength = 0

    // dp[i][j] 代表下标从i到j是一个回文串
    // dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
    const dp = []
    for (let i = 0; i < s.length; i++) {
        if (dp[i] === undefined) {
            dp[i] = []
        }
        dp[i][i] = true
    }

    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else if (j - i < 3) {
                // 字符串是两位或者三位
                dp[i][j] = true
            } else {
                dp[i][j] = dp[i + 1][j - 1]
            }

            if (dp[i][j] && j - i + 1 > maxLength) {
                maxLength = j - i + 1
                begin = i
            }
        }
    }

    return s.slice(begin, begin + maxLength)
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestPalindrome
// @after-stub-for-debug-end
