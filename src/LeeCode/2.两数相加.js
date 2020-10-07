/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
    let l3 = null;
    let tag = 0, val, p;

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

    while (l1 && l2) {
        ({ val, tag } = dealTag(l1.val + l2.val + tag, tag))
        if (l3) {
            p.next = new ListNode(val);
            p = p.next
        } else {
            l3 = new ListNode(val)
            p = l3
        }
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        ({ val, tag } = dealTag(l1.val + tag, tag))
        p.next = new ListNode(val);
        l1 = l1.next
        p = p.next
    }
    while (l2) {
        ({ val, tag } = dealTag(l2.val + tag, tag))
        p.next = new ListNode(val);
        l2 = l2.next
        p = p.next
    }
    if (tag === 1) {
        p.next = new ListNode(1);
    }
    return l3

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end