/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const findCombination = (begin, current, target) => {
    if (target === 0) {
      result.push(current)
    } else if (target > 0) {
      for (let i = begin; i < candidates.length; i++) {
        const newTarget = target - candidates[i]
        if (newTarget >= 0) {
          findCombination(i, [...current, candidates[i]], newTarget)
        }
      }
    }
  }

  findCombination(0, [], target)

  return result
}
// @lc code=end
