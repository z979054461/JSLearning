/**
 * Definition for singly-linked list.
 */
export class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
    /**
     * 头插法
     * @param  {...any} args 
     * @returns {ListNode}
     */
    LinkListInitByHeadInsert(...args) {
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
    LinkListInitByTailInsert(...args) {
        const head = new ListNode();
        let tail = head;
        args.forEach(item => {
            tail.next = new ListNode(item, null)
            tail = tail.next
        })
        return head;
    }
    /**
     * 按序号查找节点
     * @param {ListNode} head
     * @param {Integer} i 
     * @returns {ListNode}
     */
    LinkListGetElem(head, i) {
        if (head === null || i < 0) return null;
        if (i === 0) return head;

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
    LinkListLocateElem(head, value) {
        if (head === null) return null;

        let p = head ? head.next : null;
        while (p && p.value !== value) {
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
    ListNodeInsertAfter(node, value) {
        if (node === null) return false;
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
    ListNodeInsertBefore(node, value) {
        if (node === null) return false;
        //交换数据
        const p = new ListNode(node.value);
        node.value = value

        //插入
        p.next = node.next
        node.next = p
        return true
    }
    /**
     * @todo
     * 删除给定节点
     * 与前插操作类似，时间复杂度O(1)
     * @param {ListNode} node
     * @returns {Boolean} 
     */
    ListNodeDelete(node, value) {
        if (node === null) return false;

    }

    /**
     * 删除位置i处的节点
     * @param {ListNode} head
     * @param {Integer} i 
     * @returns {ListNode}
     */
    LinkListDelete(head, i) {
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
     * @todo
     * 位置i处插入节点
     * @param {ListNode} head
     * @param {Integer} i 
     * @param {any} value
     * @returns {Boolean}
     */
    LinkListInsert(head, i, value) {

    }
    /**
     * 求表长
     * @param {ListNode} head
     */
    LinkListSize(head) {
        let ret = 0
        let p = head ? head.next : null;
        while (p) {
            p = p.next
            ret++
        }
        return ret
    }
    /**
     * 打印链表
     * @param {ListNode} head
     */
    LinkListPrint(head) {
        let ret = ''
        let p = head ? head.next : null;
        while (p) {
            ret += ret ? ` -> ${p.value}` : p.value
            p = p.next
        }
        console.log(ret)
    }
}

