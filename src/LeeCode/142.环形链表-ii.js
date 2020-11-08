/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) return null;
    let p = q = head;
    while (p) {
        p = p.next ? p.next.next : null;
        q = q.next;
        if (p && p === q) {
            q = head;
            while (p) {
                if (p === q) return p
                p = p.next
                q = q.next
            }
        }
    }
    return null;
};
// @lc code=end

