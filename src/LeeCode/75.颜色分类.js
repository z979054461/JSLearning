/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 * 插入排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const tmp = nums[i]
    let j = i
    while (j > 0 && tmp < nums[j - 1]) {
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = tmp
  }
}
// @lc code=end