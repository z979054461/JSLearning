/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    if (name.length > typed.length) return false
    let i = -1, j = -1;
    let last;
    while (++i < name.length) {
        while (typed[++j] !== name[i]) {
            if (typed[j] !== last) return false;
        }
        last = name[i]
    }
    j--
    while (++j < typed.length) {
        if (typed[j] !== last) return false;
    }
    return true;
};
// @lc code=end

