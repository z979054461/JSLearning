/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
    const dealTag = (val, tag) => {
        if (val > 9) {
            val -= 10
            tag = 1
        } else {
            tag = 0
        }
        return {
            val, tag
        }
    }
    let l1Reverse = LinkReverse(l1).next;
    let l2Reverse = LinkReverse(l2).next;
    let l3 = null;
    let tag = 0, val, p;
    while (l1Reverse && l2Reverse) {
        ({ val, tag } = dealTag(l1Reverse.val + l2Reverse.val + tag, tag))
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
        ({ val, tag } = dealTag(l1Reverse.val + tag, tag))
        p.next = new ListNode(val);
        l1Reverse = l1Reverse.next
        p = p.next
    }
    while (l2Reverse) {
        ({ val, tag } = dealTag(l2Reverse.val + tag, tag))
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

