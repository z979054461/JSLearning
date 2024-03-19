/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 * 二分搜索
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const binarySearch = (left, right) => {
    if (right < left) {
      return -1
    }
    let mid = left + Math.floor((right - left) / 2)

    if (target === nums[left]) {
      return left
    }
    if (target === nums[right]) {
      return right
    }
    if (target === nums[mid]) {
      return mid
    }

    if (nums[left] < nums[mid]) {
      // 左半边升序
      if (target > nums[left] && target < nums[mid]) {
        return binarySearch(left + 1, mid - 1)
      } else {
        return binarySearch(mid + 1, right - 1)
      }
    } else {
      // 右半边升序
      if (target > nums[mid] && target < nums[right]) {
        return binarySearch(mid + 1, right - 1)
      } else {
        return binarySearch(left + 1, mid - 1)
      }
    }
  }

  return binarySearch(0, nums.length - 1)
}
// @lc code=end
