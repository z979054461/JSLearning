/**
 * 链式栈
 */

import { ListNode } from './Node'
class LinkStack {
    constructor() {
        this.top = new ListNode();
    }

    InitStack(...args) {
        this.top = new ListNode();
        args.forEach(item => this.Push(item))
    }
    StackEmpty() {
        return this.top.next === null
    }
    Push(value) {
        const p = new ListNode(value, this.top.next);
        this.top.next = p;
    }
    Pop() {
        let ret

        if (!this.StackEmpty()) {
            ret = this.top.next.value
            this.top.next = this.top.next.next
        }
        return ret
    }
    GetTop() {
        return this.StackEmpty() ? undefined : this.top.next.value
    }
}

export {
    LinkStack
}
