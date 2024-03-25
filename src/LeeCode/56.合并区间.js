/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals
  }

  let insertion
  for (let i = 1; i < intervals.length; i++) {
    insertion = intervals[i]
    let j = i
    while (j > 0 && insertion[0] < intervals[j - 1][0]) {
      intervals[j] = intervals[j - 1]
      j--
    }
    intervals[j] = insertion
  }

  const result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
    } else {
      result.push(intervals[i])
    }
  }
  return result
}
// @lc code=end
