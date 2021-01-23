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
/**
 * @param {Node} head
 * @return {Node}
 * 优化一下，使用map存储对应关系  98%
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    const indexMap = new Map();//存储原始节点的下标
    let p = head,
        i = 0, tmpNode;
    let nodeArr = [];
    //创建节点，维护val值
    while (p) {
        tmpNode = new Node(p.val, null, p.random);
        nodeArr.push(tmpNode);
        indexMap.set(p, i++);
        p = p.next;
    }
    //维护next指针和random指针
    let randomIdx;//原始随机节点的下标
    nodeArr.forEach((node, index) => {
        randomIdx = indexMap.get(node.random);
        node.next = nodeArr[index + 1] || null;
        node.random = nodeArr[randomIdx] || null;
    })
    return nodeArr[0]
};
/**
 * @param {Node} head
 * @return {Node}
 * 进一步优化，遍历一次
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    const nodeMap = new Map();//存储原始节点和新节点的对应关系
    let p = head,
        tmpNode;
    let hair = new Node(),//头结点
        tail = hair,//尾指针
        randomNode;
    //尾插法创建节点，维护当前节点的val、random和上一节点的next
    while (p) {
        if (!p.random) {
            randomNode = null;
        } else if (nodeMap.has(p.random)) {
            randomNode = nodeMap.get(p.random);
        } else {
            randomNode = new Node(p.random.val);
            nodeMap.set(p.random, randomNode);
        }
        tmpNode = nodeMap.has(p) ? nodeMap.get(p) : new Node(p.val);
        tmpNode.random = randomNode;
        nodeMap.set(p, tmpNode);
        tail.next = tmpNode;
        tail = tmpNode;
        p = p.next;
    }
    return hair.next;
};

// 有个很清奇的思路（官方方法三）：
// 每个原始节点后面复制一个节点，新节点random指针就是旧节点random.next,最后再将新旧节点拆分。
// 可以看这个解释加强理解：https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/javatu-jie-cong-hashmapdao-chang-shu-kong-jian-by-/


// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end