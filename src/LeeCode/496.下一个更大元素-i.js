/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const ret = [];
    let maxValue, value;
    for (let i = 0; i < nums1.length; i++) {
        maxValue = nums1[i]
        value = -1
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] === maxValue + 1) {
                value = nums2[j]
                break;
            }
        }
        ret.push(value)
    }
    return ret
};
// @lc code=end

