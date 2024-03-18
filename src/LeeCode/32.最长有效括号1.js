/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 * 贪心  以当前字符结尾，计算最大长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0

  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++
    } else if (s[i] === ')') {
      right++
    }
    if (right > left) {
      left = 0
      right = 0
    } else if (left === right) {
      max = Math.max(max, left * 2)
    }
  }
  left = 0
  right = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++
    } else if (s[i] === ')') {
      right++
    }
    if (left > right) {
      left = 0
      right = 0
    } else if (left === right) {
      max = Math.max(max, left * 2)
    }
  }

  return max
}
// @lc code=end
