/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * 头插法
 * @param  {...any} args 
 * @returns {ListNode}
 */
function ListInitHeadInsert(...args) {
    const head = new ListNode();
    let p = head;
    args.forEach(item => {
        let node = new ListNode(item)
        let tmp = p.next
        p.next = node
        node.next = tmp
    })
    return head;
}
/**
 * 尾插法
 * @param  {...any} args
 * @returns {ListNode} 
 */
function ListInitTailInsert(...args) {
    const head = new ListNode();
    let p = head;
    args.forEach(item => {
        p.next = new ListNode(item, null)
        p = p.next
    })
    return head;
}
/**
 * 按序号查找节点
 * @param {ListNode} head
 * @param {Integer} i 
 * @returns {ListNode}
 */
function GetElem(head, i) {
    if (head === null) return null;

    let p = head;
    let j = 0;
    while (p && j < i) {
        p = p.next
        j++
    }
    return p
}

/**
 * 按值查找节点
 * @param {ListNode} head
 * @param {any} value 
 * @returns {ListNode}
 */
function LocateElem(head, value) {
    if (head === null) return null;

    let p = head.next;
    while (p.value !== value) {
        p = p.next
    }
    return p
}
/**
 * 当前节点之后插入
 * @param {ListNode} node 
 * @param {any} value
 * @returns {Boolean} 
 */
function InsertNodeAfter(node, value) {
    if (head === null) return false;
    const p = new ListNode(value)
    const tmp = node.next
    node.next = p
    p.next = tmp
    return true

}
/**
 * 当前节点之前插入
 * @param {ListNode} node
 * @returns {Boolean} 
 */
function InsertNodeBefore(node, value) {
    if (head === null) return false;
    const p = new ListNode(node.value);
    node.value = value

    const tmp = node.next
    node.next = p
    p.next = tmp
    return true
}
/**
 * 删除位置i处的节点
 * @param {ListNode} head
 * @param {Integer} i 
 * @returns {ListNode}
 */
function DeleteNode(head, i) {
    if (head === null) return null;
    if (i <= 0) return null;
    let p = head
    let j = 0
    while (p && j < i - 1) {
        p = p.next
        j++
    }
    if (p) {
        let ret = p.next;
        p.next = ret ? ret.next : null;
        return ret
    } else {
        return null
    }

}
/**
 * 求表长
 * @param {ListNode} head
 */
function size(head) {
    let ret = 0
    let p = head ? head.next : null;
    while (p) {
        p = p.next
        ret++
    }
    return ret
}

export default ListNode;