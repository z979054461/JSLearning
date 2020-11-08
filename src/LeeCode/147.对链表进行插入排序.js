/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
    const hair = new ListNode();
    hair.next = head;
    let p = head, q = p ? p.next : null;

    while (q) {
        let r = hair;
        while (r.next && q.val > r.next.val) {
            r = r.next
        }
        if (q !== r.next) {//插入r后面
            p.next = q.next
            q.next = r.next
            r.next = q
        } else {
            p = p.next
        }
        q = p.next
    }
    return hair.next;
};
// @lc code=end

