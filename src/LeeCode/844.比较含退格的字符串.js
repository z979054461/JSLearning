/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = skipT = 0;
    while (i >= 0 || j >= 0) {
        while (S[i] === '#') {
            skipS++
            i--;
        }
        while (T[j] === '#') {
            skipT++
            j--
        }

        while (skipS > 0) {
            i--;
            skipS--;
            S[i] === '#' && (skipS += 2)
        }
        while (skipT > 0) {
            j--;
            skipT--;
            T[j] === '#' && (skipT += 2)
        }
        if (S[i] !== T[j]) return false
        i--;
        j--;
    }

    return true
};
// @lc code=end

