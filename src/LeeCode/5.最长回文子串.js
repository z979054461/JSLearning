/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 中心扩散
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }

    // 以start和end为中心，计算最大回文串的长度
    const maxPalindromeLength = (str, start, end) => {
        while (start >= 0 && end < str.length && str[start] === str[end]) {
            start--
            end++
        }
        return end - start + 1 - 2
    }

    let begin = 0
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        // 奇数和偶数分别讨论
        const oddMax = maxPalindromeLength(s, i, i)
        const evenMax = maxPalindromeLength(s, i, i + 1)
        const curMaxLength = Math.max(oddMax, evenMax)
        if (curMaxLength > maxLength) {
            maxLength = curMaxLength
            begin = i - Math.floor((curMaxLength - 1) / 2)
        }
    }
    return s.slice(begin, begin + maxLength)
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestPalindrome
// @after-stub-for-debug-end
