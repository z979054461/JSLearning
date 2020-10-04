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
 * Definition for double-linked list.
 */
class DListNode {
    constructor(value, next, prev) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}


export default ListNode;