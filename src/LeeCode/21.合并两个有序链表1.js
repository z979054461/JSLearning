/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode()
    let p = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
            p = p.next
        } else {
            p.next = l2
            l2 = l2.next
            p = p.next
        }
    }

    if (l1) {
        p.next = l1
    } else if (l2) {
        p.next = l2
    }

    return dummy.next
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists
// @after-stub-for-debug-end
