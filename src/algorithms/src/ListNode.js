/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }

    /**
     * 头插法
     * @param  {...any} args 
     * @returns {ListNode}
     */
    ListInitHeadInsert(...args){

    }
    /**
     * 尾插法
     * @param  {...any} args
     * @returns {ListNode} 
     */
    ListInitTailInsert(...args){

    }
    /**
     * 按序号查找节点
     * @param {Integer} i 
     * @returns {ListNode}
     */
    GetElem(i){

    }

    /**
     * 按值查找节点
     * @param {any} value 
     * @returns {ListNode}
     */
    LocateElem(value){

    }
    /**
     * 当前节点之后插入
     * @param {ListNode} node 
     * @returns {Boolean} 
     */
    InsertNodeAfter(node){

    }
    /**
     * 当前节点之前插入
     * @param {ListNode} node
     * @returns {Boolean} 
     */
    InsertNodeBefore(node){

    }
    /**
     * 删除位置i处的节点
     * @param {Integer} i 
     * @returns {ListNode}
     */
    DeleteNode(i){

    }
    /**
     * 求表长
     */
    size(){

    }
}

export default ListNode;