/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    let first = head,
        second = dummy;
    while (first && n-- > 0) {
        first = first.next
    }
    while (first) {
        first = first.next
        second = second.next
    }
    second && (second.next = second.next.next)
    return dummy.next
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end