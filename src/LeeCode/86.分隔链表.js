/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (59.73%)
 * Likes:    271
 * Dislikes: 0
 * Total Accepted:    55.3K
 * Total Submissions: 92.3K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
 * 
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

