/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.73%)
 * Likes:    590
 * Dislikes: 0
 * Total Accepted:    242.2K
 * Total Submissions: 610.3K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */

// @lc code=start
/**
 * 【Sunday】
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    const n = haystack.length, partenLen = needle.length;
    const map = new Map();
    // 计算偏移表
    for (let i = 0; i < partenLen; i++) {
        map.set(needle[i], partenLen - i)
    }
    //开始匹配
    let i = j = 0;
    while (i < n) {
        //比较与模式串等长的子串
        for (j = 0; j < partenLen; j++) {
            if (haystack[i + j] !== needle[j]) break;
        }
        if (j === partenLen) return i //匹配成功
        //i指针按照偏移表进行偏移
        i += map.has(haystack[i + partenLen]) ? map.get(haystack[i + partenLen]) : partenLen + 1;
    }
    return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = strStr;
// @after-stub-for-debug-end