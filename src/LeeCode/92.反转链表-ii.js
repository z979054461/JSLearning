/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let dummy = new ListNode(0, head);
    let p = dummy
    n -= m
    while (p && m-- > 1) {
        p = p.next
    }
    let ppre = p //插入点
    p = p.next
    let r = p.next
    while (p && n-- > 0) {
        p.next = r.next
        r.next = ppre.next
        ppre.next = r
        r = p.next
    }
    return dummy.next
};
// @lc code=end

