/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const hair = new ListNode();
    hair.next = head;
    let p = hair;
    let q = p.next;
    let r = hair;
    while (q) {
        if (q.val < x) {
            p.next = q.next
            q.next = r.next
            r.next = q
            r = r.next
        }
        p = q
        q = q.next
    }
    return hair.next
};
// @lc code=end

