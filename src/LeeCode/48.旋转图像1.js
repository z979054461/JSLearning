/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 * 直接找规律，每四个数为一个循环。利用临时变量交换数据
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  // i，j
  // j,n-i-1
  // n-i-1 n-j-1
  // n-j-1,i
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = tmp
    }
  }
}
// @lc code=end
