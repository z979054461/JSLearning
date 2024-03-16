/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 暴利解法
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
var removeNthFromEnd = function(head, n) {
    let length = 0
    let p = head
    while (p) {
        p = p.next
        length++
    }

    const targetIndex = length - n
    if (targetIndex < 0) {
        return head
    } else if (targetIndex === 0) {
        return head.next
    } else {
        p = head
        let q
        let iterCount = 0
        while (p) {
            if (iterCount === targetIndex) {
                q.next = p.next
                return head
            }
            q = p
            p = p.next
            iterCount++
        }
    }
}
// @lc code=end
