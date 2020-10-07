class MyQueue {
    constructor() {
        this._data = []
        this._head = 0
    }

    enQueue(ele) {
        this._data[this._data.length] = ele
    }

    deQueue() {
        if (this.isEmpty()) {
            return
        }
        return this._data[this._head++]
    }
    Front() {
        return this._data[this._head]
    }
    isEmpty() {
        return this._head >= this._data.length
    }
}

class MyCircularQueue {
    /**
     * Initialize your data structure here. Set the size of the queue to be k.
     * @param {number} k
     */
    constructor(k) {
        this._capcity = k
        this._data = []
        this._head = this._tail = -1
    }
    /**
     * Insert an element into the circular queue. Return true if the operation is successful. 
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) {
            return false
        }

        if (this._head === -1 && this._tail === -1) {
            this._head = this._tail = 0
        } else {
            this._tail = (this._tail + 1) % this._capcity
        }
        this._data[this._tail] = value
        return true
    };
    /**
     * Delete an element from the circular queue. Return true if the operation is successful.
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) {
            return false
        }
        if (this._head === this._tail) {
            this._head = this._tail = -1
        } else {
            this._head = (this._head + 1) % this._capcity
        }
        return true
    };
    /**
     * Get the front item from the queue.
     * @return {number}
     */
    Front() {
        return this._data[this._head]
    };
    /**
     * Get the last item from the queue.
     * @return {number}
     */
    Rear() {
        return this._data[this._tail]
    };

    /**
     * Checks whether the circular queue is empty or not.
     * @return {boolean}
     */
    isEmpty() {
        return this._tail === -1
    };

    /**
     * Checks whether the circular queue is full or not.
     * @return {boolean}
     */
    isFull() {
        return (this._tail + 1) % this._capcity === this._head
    };
}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

export {
    MyQueue,
    MyCircularQueue
}