/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let p = root
    let len = 0
    while (p) {
        len++
        p = p.next
    }
    let groupLen = ~~(len / k),
        extraGroup = len % k;
    p = root;
    const ret = []
    for (let i = 0; i < k; i++) {
        ret[i] = p
        let j = 0
        while (p && j < groupLen + ((i < extraGroup) ? 1 : 0) - 1) {
            j++
            p = p.next
        }

        if (p) {
            q = p.next
            p.next = null
            p = q
        }
    }
    return ret
};
// @lc code=end

