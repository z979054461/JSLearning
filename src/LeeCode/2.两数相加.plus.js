/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加 升级版
 *  数值以正序存储，需要逆置链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const LinkReverse = function (L) {
        const Head = new ListNode();
        let p;
        while (L) {
            p = L.next;
            L.next = Head.next;
            Head.next = L;
            L = p;
        }
        return Head
    }
    let l1Reverse = LinkReverse(l1).next;
    let l2Reverse = LinkReverse(l2).next;
    let l3 = null;
    let tag = 0, val, p;
    while (l1Reverse && l2Reverse) {
        val = l1Reverse.val + l2Reverse.val + tag
        if (val > 9) {
            val -= 10
            tag = 1
        } else {
            tag = 0
        }
        if (l3) {
            p.next = new ListNode(val);
            p = p.next
        } else {
            l3 = new ListNode(val)
            p = l3
        }
        l1Reverse = l1Reverse.next
        l2Reverse = l2Reverse.next
    }
    while (l1Reverse) {
        val = l1Reverse.val + tag
        if (val > 9) {
            val -= 10
            tag = 1
        } else {
            tag = 0
        }
        p.next = new ListNode(val);
        l1Reverse = l1Reverse.next
        p = p.next
    }
    while (l2Reverse) {
        val = l2Reverse.val + tag
        if (val > 9) {
            val -= 10
            tag = 1
        } else {
            tag = 0
        }
        p.next = new ListNode(val);
        l2Reverse = l2Reverse.next
        p = p.next
    }
    if (tag === 1) {
        p.next = new ListNode(1);
    }
    return LinkReverse(l3).next

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end