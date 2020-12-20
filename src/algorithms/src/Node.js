// #region ListNode
/**
 * Definition for singly-linked list.
 */
export class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}
// #endregion ListNode

// #region DoublyListNode
/**
 * Definition for double-linked list.
 */
export class DoublyListNode extends ListNode {
    constructor(value, next, prev) {
        super(value, next);
        this.prev = null;//前驱指针
    }
}
// #endregion DoublyListNode

// #region StaticListNode
/**
 * Definition for static-linked list.
 * 使用数组下标作为指针域
 */
export class StaticListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? -1 : next);
    }
}
// #endregion StaticListNode

export default {
    ListNode,
    DoublyListNode,
    StaticListNode,
}