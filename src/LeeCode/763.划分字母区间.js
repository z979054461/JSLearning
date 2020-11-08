/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    const map = {};
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = Math.max(map[S[i]] || 0, i)
    }
    let start = 0, end = 0;
    let partition = [];
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, map[S[i]])
        if (i === end) {
            partition.push(end - start + 1)
            start = end + 1
        }
    }
    return partition
};
// @lc code=end

