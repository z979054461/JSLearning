

// import add from './queue'
const { MyQueue, MyCircularQueue } = require('../src/queue')

test('MyQueue test', () => {
    const queue = new MyQueue();

    expect(queue.Front()).toBeUndefined()
    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.deQueue()).toBeUndefined()
    queue.enQueue(11)
    expect(queue.Front()).toBe(11)
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.deQueue()).toBe(11)
    expect(queue.isEmpty()).toBeTruthy()
    queue.enQueue(12)
    queue.enQueue(13)
    queue.deQueue()
    queue.enQueue(14)
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.Front()).toBe(13)
    expect(queue.deQueue()).toBe(13)
    expect(queue.deQueue()).toBe(14)
    expect(queue.deQueue()).toBeUndefined()

})

test('MyCircularQueue test', () => {
    const queue = new MyCircularQueue(3);
    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.isFull()).toBeFalsy()
    queue.enQueue(1)
    expect(queue._data).toStrictEqual([1])
    queue.enQueue(2)
    expect(queue._data).toStrictEqual([1, 2])
    queue.enQueue(3)
    expect(queue._data).toStrictEqual([1, 2, 3])
    queue.enQueue(4)
    expect(queue._data).toStrictEqual([1, 2, 3])
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.isFull()).toBeTruthy()
    expect(queue.Front()).toBe(1)
    expect(queue.Rear()).toBe(3)
    queue.deQueue()
    queue.enQueue(4)
    expect(queue.Rear()).toBe(4)
})