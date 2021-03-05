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
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0;
    const ret = [];
    while (i < nums1.length || j < nums2.length) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                ret.push(nums1[i++])
            } else {
                ret.push(nums2[j++])
            }
        } else if (i < nums1.length) {
            ret.push(nums1[i++])
        } else {
            ret.push(nums2[j++])
        }
    }
    if (ret.length % 2 === 0) {
        return (ret[ret.length / 2] + ret[ret.length / 2 - 1]) / 2
    } else {
        return ret[(ret.length - 1) / 2]
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end