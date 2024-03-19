/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length < 1) {
    return -1
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  if (target > nums[0]) {
    for (let i = 1; i < nums.length; i++) {
      if (target === nums[i]) {
        return i
      }
      if (nums[i + 1] < nums[i]) {
        break
      }
    }
    return -1
  } else if (target < nums[0]) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (target === nums[i]) {
        return i
      }
      if (nums[i - 1] > nums[i]) {
        break
      }
    }
    return -1
  }
  return nums[0] === target ? 0 : -1
}
// @lc code=end
