/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 * 贪心
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length < 1) {
    return 0
  }

  let maxSum = nums[0]
  let currentSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}
// @lc code=end
