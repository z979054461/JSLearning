/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (51.47%)
 * Likes:    538
 * Dislikes: 0
 * Total Accepted:    78.7K
 * Total Submissions: 152.7K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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


// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end