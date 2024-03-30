/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 * 动态规划  Hard
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = []
  const m = word1.length
  const n = word2.length

  if (m * n === 0) {
    return m + n
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i] = [i]
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = dp[i][j]
      } else {
        dp[i + 1][j + 1] = 1 + Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j])
      }
    }
  }

  return dp[m][n]
}
// @lc code=end