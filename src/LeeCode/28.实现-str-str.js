/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
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
    const n = haystack.length, m = needle.length;
    const map = new Map();
    // 计算偏移表
    for (let i = 0; i < m; i++) {
        map.set(needle[i], m - i)
    }
    //开始匹配
    let i = j = 0;
    while (i < n) {
        //比较与模式串等长的子串
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) break;
        }
        if (j === m) return i //匹配成功
        //i指针按照偏移表进行偏移
        i += map.has(haystack[i + m]) ? map.get(haystack[i + m]) : m + 1;
    }
    return -1
};
/**
 * 【BF】
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    const n = haystack.length, m = needle.length;
    //开始匹配
    let i = j = 0;
    while (i < n) {
        //比较与模式串等长的子串
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) break;
        }
        if (j === m) return i //匹配成功
        // 回溯i指针
        i++
    }
    return -1
};
/**
 * 【Rabin Karp】
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    const n = haystack.length, m = needle.length;
    if (n < m) return -1

    const base = 26;//字母个数为26
    const modules = 2 ** 31;//避免溢出，如果模式串过长，溢出后将产生哈希碰撞
    const charCode = ch => ch.charCodeAt() - 'a'.charCodeAt();
    const hash = str => {
        let ret = 0
        if (typeof str === 'string')
            for (let i = 0; i < str.length; i++) {
                ret = (ret * base + charCode(str[i])) % modules;
            }
        return ret
    }
    const hash_pattern = hash(needle);
    //这个值很大，一定要取模……
    const WEIGHT = base ** (m - 1) % modules;
    let hash_tmp = hash(haystack.slice(0, m));
    for (let i = 0; i < n; i++) {
        if (hash_tmp === hash_pattern) return i
        if (i + m >= n) break;
        //根据前一个哈希值计算滚动哈希(减去当前字母的权重  增加下一个字母的权重)
        hash_tmp = ((hash_tmp - hash(haystack[i]) * WEIGHT) * base + hash(haystack[i + m])) % modules
        while (hash_tmp < 0) hash_tmp = (hash_tmp + modules) % modules
    }
    return -1
};

/**
 * 【KMP】
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    const n = haystack.length, m = needle.length;
    if (n < m) return -1
    //求next数组
    const getNext = str => {
        let i = 0, j = -1;
        let next = [-1]
        while (i < str.length - 1) {
            if (j < 0 || str[i] === str[j]) {
                i++;
                j++;
                next[i] = str[i] === str[j] ? next[j] : j;
            } else {
                j = next[j];
            }
        }
        return next;
    }
    const nextArr = getNext(needle);

    let i = j = 0
    while (i < n && j < m) {
        if (j < 0 || haystack[i] === needle[j]) {
            j++
            i++
        } else {
            j = nextArr[j]//模式串前移
        }
    }
    return j >= m ? i - m : -1
};
// @lc code=end

