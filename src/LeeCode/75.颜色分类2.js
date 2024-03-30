/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 * 双指针
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0
  let p1 = 0
  let i = 0
  const swap = (a, b) => {
    const tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
  }
  while (i < nums.length) {
    if (nums[i] === 1) {
      swap(i, p1)
      p1++
    } else if (nums[i] === 0) {
      swap(i, p0)
      if (p0 < p1) {
        swap(i, p1)
      }
      p0++
      p1++
    }
    i++
  }
}
// @lc code=end
