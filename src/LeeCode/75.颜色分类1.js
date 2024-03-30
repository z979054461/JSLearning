/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 * 单指针
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0
  const swap = (a, b) => {
    const tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
  }

  const swapNumberToCurser = num => {
    while (nums[i] === num) {
      i++
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === num) {
        swap(i++, j)
        while (nums[i] === 0) {
          i++
        }
      }
    }
  }
  swapNumberToCurser(0)
  swapNumberToCurser(1)
}
// @lc code=end