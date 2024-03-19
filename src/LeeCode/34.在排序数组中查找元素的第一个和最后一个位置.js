/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (left, right) => {
    if (right < left) {
      return [-1, -1]
    }
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      let min = mid
      while (min > 0 && nums[min - 1] === target) {
        min--
      }
      let max = mid
      while (max < nums.length - 1 && nums[max + 1] === target) {
        max++
      }
      return [min, max]
    } else if (nums[mid] > target) {
      return binarySearch(left, mid - 1)
    } else {
      return binarySearch(mid + 1, right)
    }
  }
  return binarySearch(0, nums.length - 1)
}
// @lc code=end
