/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 双指针 第二层用for循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length
    if (n < 3) {
        return false
    }

    const result = []
    const sortedNums = nums.sort((x, y) => (x === y ? 0 : x > y ? 1 : -1))

    // 第二层用for循环
    for (let i = 0; i < n; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }

        let k = n - 1
        let target = -sortedNums[i]
        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
                continue
            }

            while (j < k && sortedNums[j] + sortedNums[k] > target) {
                k--
            }

            if (j === k) {
                break
            }

            if (sortedNums[k] + sortedNums[j] === target) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
            }
        }
    }

    return result
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum
// @after-stub-for-debug-end
