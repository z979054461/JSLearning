/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 双指针
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let sum = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (height[left] < height[right]) {
      sum += leftMax - height[left++]
    } else {
      sum += rightMax - height[right--]
    }
  }
  return sum
}
// @lc code=end
