/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 *
 * https://leetcode-cn.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (72.55%)
 * Likes:    340
 * Dislikes: 0
 * Total Accepted:    40.9K
 * Total Submissions: 53.7K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：S = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca", "defegde", "hijhklij"。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S的长度在[1, 500]之间。
 * S只包含小写字母 'a' 到 'z' 。
 * 
 * 
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


// @after-stub-for-debug-begin
module.exports = partitionLabels;
// @after-stub-for-debug-end