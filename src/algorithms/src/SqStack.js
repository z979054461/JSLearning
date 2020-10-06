/**
 * 顺序栈
 */
class SqStack {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    InitStack(...args) {
        this.top = -1
        args.forEach(item => this.Push(item))
    }
    StackEmpty() {
        return this.top === -1
    }
    Push(item) {
        this.data[++this.top] = item
    }
    Pop() {
        return this.StackEmpty() ? undefined : this.data[this.top--]
    }
    GetTop() {
        return this.StackEmpty() ? undefined : this.data[this.top]
    }
}

export {
    SqStack,
}
