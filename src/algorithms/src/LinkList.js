
import { ListNode } from './Node'

export default class LinkList extends ListNode {
    constructor() {
        super();

        this.size = 0;
        this.hair = new ListNode();//头结点,并非第一个节点
        return this;
    }
    /**
     * 获取头指针
     */
    getHead() {
        return this.hair.next;
    }
    /**
     * 头插法
     * @param  {...any} args 
     * @returns {ListNode}
     */
    InitByHeadInsert(...args) {
        let p = this.hair, tmp, node;
        args.forEach(item => {
            node = new ListNode(item)
            tmp = p.next
            p.next = node
            node.next = tmp
            this.size++
        })
        return this;
    }
    /**
     * 尾插法
     * @param  {...any} args
     * @returns {ListNode} 
     */
    InitByTailInsert(...args) {
        let tail = this.hair;
        args.forEach(item => {
            tail.next = new ListNode(item, null)
            tail = tail.next
            this.size++
        })
        return this;
    }
    /**
     * 按序号查找节点
     * @param {Integer} i 
     * @returns {ListNode}
     */
    GetElemByIndex(i) {
        if (this.isEmpty() || i < 0 || i >= this.size) return null;

        let p = this.getHead();
        let j = 0;
        while (p && j < i) {
            p = p.next
            j++
        }
        return p
    }

    /**
     * 按值查找节点
     * @param {any} value 
     * @returns {ListNode}
     */
    GetElemByValue(value) {
        if (this.isEmpty()) return null;

        let p = this.getHead();
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
    InsertAfter(node, value) {
        if (node === null) return false;
        const p = new ListNode(value)
        const tmp = node.next
        node.next = p
        p.next = tmp
        this.size++;
        return true
    }
    /**
     * 当前节点之前插入
     * @param {ListNode} node
     * @returns {Boolean} 
     */
    InsertBefore(node, value) {
        if (node === null) return false;
        //交换数据
        const p = new ListNode(node.value);
        node.value = value

        //插入
        p.next = node.next
        node.next = p

        this.size++;
        return true
    }
    /**
     * 删除给定节点，与前插操作类似
     * 投机取巧，将后一个节点的值拷过来，删除后一个节点
     * @param {ListNode} node
     * @returns {Boolean} 
     */
    DeleteCurrNode(node) {
        if (node === null) return false;
        node.next && (node.value = node.next.value);
        node.next = node.next ? node.next.next : null;
        this.size--;
        return true;
    }

    /**
     * 删除位置i处的节点
     * @param {Integer} i 
     * @returns {ListNode}
     */
    DeleteByIndex(i) {
        if (this.isEmpty() || i < 0 || i >= this.size) return null;

        let p = this.getHead();
        let j = 0
        while (p && j < i - 1) {
            p = p.next
            j++
        }
        if (p) {
            let ret = p.next;
            p.next = ret ? ret.next : null;
            this.size--;
            return ret
        } else {
            return null
        }
    }
    /**
     * 位置i处插入节点
     * @param {Integer} i 
     * @param {any} value
     * @returns {Boolean}
     */
    InsertByIndex(i, value) {
        if (this.isEmpty() || i < 0 || i >= this.size) return false;
        let p = this.hair;
        let j = 0
        while (p && j < i) {
            p = p.next
            j++
        }
        const node = new ListNode(value);
        node.next = p.next;
        p.next = node;
        this.size++;
        return true;
    }
    /**
     * 求表长
     * @returns {Boolean}
     */
    LinkListSize() {
        return this.size
    }
    /**
     * 判空
     * @returns {Boolean}
     */
    isEmpty() {
        return this.size === 0
    }
    /**
     * 打印链表
     */
    toString() {
        let ret = ''
        let p = this.getHead();
        while (p) {
            ret += ret ? ` -> ${p.value}` : p.value
            p = p.next
        }
        return ret
    }
}

