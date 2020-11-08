/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
    const hair = new ListNode(0, head);
    let Insert = hair;
    let p = Insert.next, q, step, r;
    while (p) {
        step = k
        q = p
        while (q && step-- > 0) {
            q = q.next
        }
        if (step <= 0) {
            let tmp = null
            while (p !== q) {
                if (Insert.next === p) {
                    tmp = p //下一个插入点
                    p = p.next
                    continue;
                }
                r = p.next
                p.next = Insert.next;
                Insert.next = p
                p = r
            }
            Insert = tmp
            Insert.next = q
        } else {
            return hair.next
        }
    }
    return hair.next
};
// @lc code=end

