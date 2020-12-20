/**
 * Definition for singly-linked list.
 */
export class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Definition for double-linked list.
 * @todo
 */
export class DoublyListNode extends ListNode {
    constructor(value, next, prev) {
        super(value, next);
        this.prev = null;//前驱指针
    }
}


export default {
    ListNode,
    DoublyListNode,
}