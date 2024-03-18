/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 * 栈
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let result = 0

  let i = 0
  while (i < s.length) {
    if (s[i] === '(') {
      const stack = []
      let current = 0
      for (let j = i; j < s.length; j++) {
        if (s[j] === '(') {
          stack.push(s[j])
          current++
        } else {
          if (stack.length === 0) {
            result = Math.max(result, current)
            current = 0
            break
          } else {
            stack.pop()
            current++
            if (stack.length === 0) {
              result = Math.max(result, current)
            }
          }
        }
      }
    }
    i++
  }
  return result
}
// @lc code=end
