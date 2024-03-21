/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 回溯
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const dfs = (current, arr) => {
    if (arr.length === 0) {
      result.push(current)
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(
        [...current, arr[i]],
        arr.filter((item, index) => index !== i),
      )
    }
  }
  dfs([], nums)
  return result
}
// @lc code=end
