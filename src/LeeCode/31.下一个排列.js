/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const swap = (a, b) => {
    const tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
  }

  const revert = (a, b) => {
    while (a < b) {
      swap(a++, b--)
    }
  }

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          swap(j, i - 1)
          revert(i, nums.length - 1)
          return
        }
      }
      break
    }
  }
  revert(0, nums.length - 1)
}
// @lc code=end