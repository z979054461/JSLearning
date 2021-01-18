/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null;
    if (!head.next) return head;

    //连成一个环
    let p = head,length = 1;
    while (p.next) {
        p = p.next
        length++
    }
    let q = p;
    p = head;
    q.next = p;
    //遍历step次，断开环
    const step = length-k%length;
    for (let i = 0; i < step; i++) {
        q = p;
        p = p.next;
    }
    q.next = null;
    return p;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end