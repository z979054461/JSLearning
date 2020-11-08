/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const hair = new ListNode(-1, head);
    let p = hair, q = p.next, r;
    while (q && q.next) {
        //删除q
        p.next = q.next;
        p = p.next;
        if (p.next) {
            //插入q
            r = p.next;
            p.next = q
            q.next = r
            //pq前移
            p = q
            q = q.next
        } else {
            q.next = null;
            p.next = q
        }
    }
    return hair.next
};

var swapPairs2 = function (head) {
    const hair = new ListNode(0, head);
    let even = 0 //当前是否偶数节点
    let p = hair, q = p ? p.next : null, r = q ? q.next : null;
    while (q) {
        if (even) {
            p.next = r
            q.next = p.next
            p.next = q

            p = p.next.next
            q = r
            r = r ? r.next : null
        }
        p = q
        q = r
        r = r ? r.next : null
        even = ~even
    }
    return hair.next
};
// @lc code=end

