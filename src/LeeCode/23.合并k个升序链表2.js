/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 * 非递归
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
      return null
    }
  
    return lists.reduce((acc, item) => {
      const dummy = new ListNode()
      let p = dummy
      let l1 = acc
      let l2 = item
      while (l1 && l2) {
        if (l1.val <= l2.val) {
          p.next = l1
          l1 = l1.next
        } else {
          p.next = l2
          l2 = l2.next
        }
        p = p.next
      }
      p.next = l1 ? l1 : l2
      return dummy.next
    })
  }
  // @lc code=end
  