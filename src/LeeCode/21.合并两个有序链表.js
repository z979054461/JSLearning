/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const hair = new ListNode(0, l1);
    let prev = hair, p;
    while (l1 && l2) {
        if (l2.val < l1.val) {
            p = l2.next;
            l2.next = prev.next;
            prev.next = l2;
            l1 = l2;
            l2 = p;
        } else {
            prev = l1;
            l1 = l1.next;
        }
    }
    l2 && (prev.next = l2);

    return hair.next;
};
// 递归
var mergeTwoLists2 = function (l1, l2) {
    if(l1 === null){
        return l2;
    }else if(l2 === null){
        return l1;
    }else if(l1.val <= l2.val){
        l1.next = mergeTwoLists2(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists2(l1,l2.next);
        return l2;
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end