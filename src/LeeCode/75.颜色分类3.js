/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 * 双指针 优化
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0
  let p2 = nums.length - 1
  const swap = (a, b) => {
    const tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
  }

  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] === 2) {
      swap(i, p2--)
    }
    if (nums[i] === 0) {
      swap(i, p0++)
    }
  }
}
// @lc code=end
