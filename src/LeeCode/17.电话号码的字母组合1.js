/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * 非递归
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    let result = map[digits[0]]

    for (let i = 1; i < digits.length; i++) {
        const lastLetterMap = map[digits[i]]

        result = result.reduce((acc, item) => {
            for (let lastLetter of lastLetterMap) {
                acc.push(`${item}${lastLetter}`)
            }
            return acc
        }, [])
    }

    return result
}
// @lc code=end
