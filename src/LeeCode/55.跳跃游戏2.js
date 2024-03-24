/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 贪心，最简洁的写法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0
  for (let i = 0; i <= reach && reach < nums.length - 1; i++) {
    reach = Math.max(i + nums[i], reach)
  }
  return reach >= nums.length - 1
}
// @lc code=end
