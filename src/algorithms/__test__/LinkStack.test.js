import { LinkStack } from '../src/LinkStack'

let stack;
beforeEach(() => {
    stack = new LinkStack();
})
describe('LinkStack TestCases', () => {
    test('Stack init', () => {
        expect(stack.GetTop()).toBeUndefined
    })

    test('Stack Push', () => {
        stack.Push(1)
        stack.Push(2)
        stack.Push(3)
        expect(stack.GetTop()).toBe(3)
    })

    test('Stack Pop', () => {
        stack.Push(1)
        stack.Push(2)
        stack.Push(3)
        let top = stack.Pop()
        expect(top).toBe(3)
        expect(stack.GetTop()).toBe(2)
    })
    test('Stack Empty', () => {
        stack.Push(1)
        stack.Push(2)
        expect(stack.StackEmpty()).toBeFalsy
        stack.Pop()
        stack.Pop()
        expect(stack.StackEmpty()).toBeTruthy
        expect(stack.GetTop()).toBe(undefined)
    })
})
