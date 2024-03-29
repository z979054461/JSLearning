/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 动态规划 迭代
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }

  let first = 1
  let second = 2
  result = 0
  for (let i = 3; i <= n; i++) {
    result = first + second
    first = second
    second = result
  }
  return result
}
// @lc code=end
