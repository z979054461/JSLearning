/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (68.19%)
 * Likes:    722
 * Dislikes: 0
 * Total Accepted:    188K
 * Total Submissions: 275.4K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 
 * 
 * 
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


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end