/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head == null) return;
    let first = second = head;
    //拆分
    while (first && first.next) {
        first = first.next.next
        second = second.next
    }
    const hair = new ListNode(0, second.next);
    second.next = null;
    let p = hair.next, q = p ? p.next : null;
    first = head;
    //反转第二段
    while (q) {
        p.next = q.next
        q.next = hair.next
        hair.next = q
        q = p.next
    }
    p = hair.next
    //合并
    while (p) {
        q = p.next
        p.next = first.next
        first.next = p
        first = p.next
        p = q
    }
    return head;
};
// @lc code=end

