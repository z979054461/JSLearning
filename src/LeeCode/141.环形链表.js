/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) return false;
    let p = q = head;
    while (p) {
        p = p.next ? p.next.next : null;
        q = q.next;
        if (p && p === q) return true;
    }
    return false;
};
// @lc code=end

