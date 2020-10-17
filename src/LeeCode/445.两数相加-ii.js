/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 *
 * https://leetcode-cn.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (58.21%)
 * Likes:    291
 * Dislikes: 0
 * Total Accepted:    52.9K
 * Total Submissions: 90.9K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 
 * 
 * 进阶：
 * 
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 8 -> 0 -> 7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
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


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end