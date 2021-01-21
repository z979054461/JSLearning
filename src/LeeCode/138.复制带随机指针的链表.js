/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
    let p = head;//扫描指针
    const nodeList = [];
    let q;//尾指针
    while(p){
        let node = new Node(p.val,null,p.random);
        if(q){
            q.next = node;
        }
        q = node;
        nodeList.push(node);
        p = p.next;
    }
    p = head;
    let i = 0;
    while(p){
        for(let j = 0; j < nodeList.length; j++){
            if(nodeList[j].random === p){
                nodeList[j].random = nodeList[i];
            }
        }
        i++;
        p = p.next;
    }
    return nodeList[0];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end