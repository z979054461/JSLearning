/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 动态规划
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) {
    return 0
  }

  // 分别存储每个位置从左看和从右看的最大值
  const dpLeft = []
  const dpRight = []
  dpLeft[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    dpLeft[i] = Math.max(dpLeft[i - 1], height[i])
  }

  dpRight[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--) {
    dpRight[i] = Math.max(dpRight[i + 1], height[i])
  }

  let result = 0
  for (let i = 0; i < height.length; i++) {
    result += Math.min(dpLeft[i], dpRight[i]) - height[i]
  }
  return result
}
// @lc code=end
