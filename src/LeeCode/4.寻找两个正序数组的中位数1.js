/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 较小数组用nums1表示
    if (nums1.length > nums2.length) {
        const temp = nums1
        nums1 = nums2
        nums2 = temp
    }

    const m = nums1.length
    const n = nums2.length

    // 分割线左边的所有元素需要满足的个数为 (m + n + 1) / 2
    const totalLeft = Math.floor((m + n + 1) / 2)

    let left = 0
    let right = m

    // 对较短数组nums1进行二分查找，找个一组i j 使得 Max(LeftPart) <= Min(RightPart)
    // nums1[i-1] <= nums2[j] && nums2[j-1] <= nums1[i]
    while (left < right) {
        const i = Math.floor((left + right + 1) / 2)
        const j = totalLeft - i
        if (nums1[i - 1] > nums2[j]) {
            right = i - 1
        } else {
            left = i
        }
    }

    const i = left
    const j = totalLeft - i

    const nums1LeftPartMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1]
    const nums1RightPartMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i]
    const nums2LeftPartMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1]
    const nums2RightPartMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j]

    if ((m + n) % 2 === 0) {
        return (
            (Math.max(nums1LeftPartMax, nums2LeftPartMax) +
                Math.min(nums1RightPartMin, nums2RightPartMin)) /
            2
        )
    } else {
        return Math.max(nums1LeftPartMax, nums2LeftPartMax)
    }
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays
// @after-stub-for-debug-end
