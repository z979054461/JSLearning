/**
 * Definition for double-linked list.
 * @todo
 */
class DListNode {
    constructor(value, next, prev) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}