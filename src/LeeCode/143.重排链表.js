/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (56.58%)
 * Likes:    424
 * Dislikes: 0
 * Total Accepted:    64.7K
 * Total Submissions: 108.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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


// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end