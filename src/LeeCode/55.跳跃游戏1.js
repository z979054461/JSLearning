/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 贪心
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 当前最远能到达的位置
  let farIndex = 0
  for (let i = 0; i < nums.length; i++) {
    // 最远也不能到达当前位置就提前退出
    if (i > farIndex) {
      return false
    }

    // 已经能到最后一步就提前退出
    if (i + nums[i] >= nums.length - 1) {
      return true
    }
    // 更新最远位置
    farIndex = Math.max(i + nums[i], farIndex)
  }

  return false
}
// @lc code=end
