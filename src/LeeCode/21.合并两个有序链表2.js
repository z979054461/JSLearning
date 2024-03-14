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
    if (!l1 && !l2) {
        return null
    } else if (!l1) {
        return l2
    } else if (!l2) {
        return l1
    }

    const dummy = new ListNode()
    let p = dummy
    if (l1.val < l2.val) {
        p.next = l1
        l1 = l1.next
    } else {
        p.next = l2
        l2 = l2.next
    }

    p.next.next = mergeTwoLists(l1, l2)
    return dummy.next
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists
// @after-stub-for-debug-end
