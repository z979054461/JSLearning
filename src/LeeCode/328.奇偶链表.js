/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function (head) {
    let oddTail = head;
    if (!oddTail) return head;

    let ppre = oddTail;
    let p = ppre.next;
    let oddTag = 0//奇数位标记
    while (p) {
        if (oddTag) {//奇数删除p并插入到奇数末尾
            ppre.next = p.next
            p.next = oddTail.next
            oddTail.next = p
            oddTail = p
        } else {//偶数继续前进
            ppre = ppre.next
        }
        oddTag = ~oddTag
        p = ppre.next
    }
    return head
};
// @lc code=end

