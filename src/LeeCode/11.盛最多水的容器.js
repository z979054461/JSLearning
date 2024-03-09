/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 双指针法
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0
    }

    let i = 0
    let j = height.length - 1
    let maxArea = 0
    while (i < j) {
        const tempAera = (j - i) * Math.min(height[i], height[j])
        if (tempAera > maxArea) {
            maxArea = tempAera
        }
        if (height[i] > height[j]) {
            const tempHeight = height[j--]
            while (height[j] <= tempHeight) {
                j--
            }
        } else {
            const tempHeight = height[i++]
            while (height[i] <= tempHeight) {
                i++
            }
        }
    }

    return maxArea
}
// @lc code=end
