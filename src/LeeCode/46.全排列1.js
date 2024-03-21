/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 递归
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return [nums]
  }

  const [first, ...rest] = nums
  const restArrange = permute(rest)

  const result = restArrange.reduce((acc, item) => {
    for (let i = 0; i <= item.length; i++) {
      const tmp = [...item]
      tmp.splice(i, 0, first)
      acc.push(tmp)
    }
    return acc
  }, [])

  return result
}
// @lc code=end
