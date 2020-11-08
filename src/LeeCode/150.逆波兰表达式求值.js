/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    const operationMap = new Map([
        ['+', (b, a) => (+a) + (+b)],
        ['-', (b, a) => (+a) - (+b)],
        ['*', (b, a) => (+a) * (+b)],
        ['/', (b, a) => ~~((+a) / (+b))],
    ]);
    tokens.forEach(token => {
        if (operationMap.has(token)) {
            stack.push(operationMap.get(token)(stack.pop(), stack.pop()))
        } else {
            stack.push(token)
        }
    });
    return stack.pop()
};
// @lc code=end

