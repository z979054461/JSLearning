/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length < 1) return null;
    if (lists.length === 1) return lists[0];

    const hair = new ListNode(0, lists.shift());
    let p = hair, q, r;
    while (lists.length) {
        q = lists.shift();
        while (q) {
            if (p.next === null) {
                p.next = q;
                break;
            } else if (q.val <= p.next.val) {
                r = q.next;
                q.next = p.next;
                p.next = q;
                q = r;
            } else {
                p = p.next;
            }
        }
        p = hair;
    }
    return hair.next
};
// @lc code=end

