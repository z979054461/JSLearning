/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 单调栈
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
  const stack = []
  let i = 0
  let result = 0
  while (i < height.length) {
    while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (stack.length === 0) {
        break
      }
      const left = stack[stack.length - 1]

      const currentWidth = i - left - 1
      const currentHeight = Math.min(height[left], height[i]) - height[top]
      result += currentWidth * currentHeight
    }
    stack.push(i++)
  }
  return result
}
// @lc code=end
