/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 * 动态规划
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

  // f(n) = max(f(n-1)+nums(n),nums(n));
  let max = nums[0]
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] + nums[i] > nums[i]) {
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
}
// @lc code=end
