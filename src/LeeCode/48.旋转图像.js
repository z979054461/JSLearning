/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 * 水平翻转+对角线翻转
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[n - i - 1][j]
      matrix[n - i - 1][j] = tmp
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
}
// @lc code=end
