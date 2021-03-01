/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const tmpMap = new Map();
    let ret = 0;
    for(let i = 0; i < s.length;i++){
        if(tmpMap.has(s[i])){
            ret = Math.max(ret,tmpMap.size)
            i = tmpMap.get(s[i])
            tmpMap.clear();
        }else{
            tmpMap.set(s[i],i);
        }
    }
    return Math.max(ret,tmpMap.size)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end