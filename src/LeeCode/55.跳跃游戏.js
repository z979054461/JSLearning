/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 动态规划
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = [true]
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    dp[i] = false
    while (j >= 0) {
      if (dp[j] && nums[j] >= i - j) {
        dp[i] = true
        break
      }
      j--
    }
  }

  return dp[nums.length - 1]
}
// @lc code=end
