/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 乱七八糟解出来的……，固定左指针寻找下一个右侧边际
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0
  let j = 0
  let sum = 0

  while (i < height.length) {
    if (height[i] > 0) {
      j = i + 1
      let tmpHeight = 0
      let tmpMax = 0
      let rightIndex = 0
      while (j < height.length && height[j] < height[i]) {
        if (height[j] > tmpMax) {
          tmpMax = height[j]
          rightIndex = j
        }
        tmpHeight += height[j++]
      }
      if (j < height.length) {
        rightIndex = j
      } else if (rightIndex > 0) {
        let k = rightIndex
        while (k < j) {
          tmpHeight -= height[k++]
        }
      }

      if (rightIndex > 0) {
        sum += (rightIndex - i - 1) * Math.min(height[i], height[rightIndex]) - tmpHeight
        i = rightIndex
        continue
      }
    }
    i++
  }
  return sum
}
// @lc code=end
