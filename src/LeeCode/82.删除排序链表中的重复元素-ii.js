/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    const hair = new ListNode();
    hair.next = head;
    let p = hair, q = p.next, tmpVal = q ? q.val : null;
    while (q && q.next) {
        if (tmpVal === q.next.val) {
            //删除相同元素的节点
            while(q && q.next && tmpVal === q.next.val){
                q = q.next
            }
            q = q.next
            p.next = q
            tmpVal = q ? q.val : null;
        } else {
            //更新p、q和当前值
            p = q
            q = q.next
            tmpVal = q ? q.val : null;
        }
    }
    return hair.next;
};

//方法二：hash记录元素的出现次数
//方法三：尾插法新建链表
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end