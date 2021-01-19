/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 可能还需要快慢指针优化下
 * 官方的分治 + 中序遍历优化没太看明白...
 */
var sortedListToBST = function (head) {
    if (head === null) return null;
    if (head.next === null) return new TreeNode(head.val);
    //计算length
    let length = 0;
    let p = head;
    while (p){
        length++;
        p = p.next;
    }
    //找到中点，偶数为偏右的那个值
    let i = -1,prev;
    p = head;
    while (++i < ~~(length/2)) {
        prev = p;
        p = p.next;
    }
    //中点前后断链
    prev.next = null;
    let right = p.next;
    //递归构造二叉树
    return new TreeNode(p.val, sortedListToBST(head), sortedListToBST(right))
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedListToBST;
// @after-stub-for-debug-end