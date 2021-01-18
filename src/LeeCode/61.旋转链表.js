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
// var rotateRight = function (head, k) {
//     if (!head) return null;
//     if (!head.next) return head;

//     //连成一个环
//     let p = head,length = 1;
//     while (p.next) {
//         p = p.next
//         length++
//     }
//     let q = p;
//     p = head;
//     q.next = p;
//     //遍历step次，断开环
//     const step = length-k%length;
//     for (let i = 0; i < step; i++) {
//         q = p;
//         p = p.next;
//     }
//     q.next = null;
//     return p;
// };
var rotateRight = function (head, k) {
    if (!head) return null;
    let p = head, length = 0, q;
    //计算length,q保存尾结点
    while (p) {
        q = p;
        p = p.next;
        length++;
    }
    if(k%length === 0) return head;
    //找到头结点的前一个节点
    let preHeadIdx = length - k % length - 1;
    p = head;
    while (preHeadIdx-- > 0) {
        p = p.next;
    }
    //断开并用尾结点连接head
    const newHead = p.next;
    p.next = null;
    q.next = head;
    return newHead;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end