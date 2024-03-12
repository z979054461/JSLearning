/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 双指针 第二层用while循环
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

    for (let i = 0; i < n; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }

        // 第二层用while循环
        let j = n - 1
        let k = i + 1
        while (k < j) {
            const sum = sortedNums[i] + sortedNums[k] + sortedNums[j]
            if (sum === 0) {
                result.push([sortedNums[i], sortedNums[k], sortedNums[j]])
            }

            if (sum > 0) {
                j--
                while (sortedNums[j + 1] === sortedNums[j]) {
                    j--
                }
            } else {
                k++
                while (sortedNums[k - 1] === sortedNums[k]) {
                    k++
                }
            }
        }
    }

    return result
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum
// @after-stub-for-debug-end
