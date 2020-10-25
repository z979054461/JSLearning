import { BiTree, PreOrder, InOrder, PostOrder, PreOrder2, InOrder2, PostOrder2, LevelOrder } from '../src/BiTree'

let biTree;
beforeEach(() => {
    biTree = new BiTree(1, 2, 3, null, 4, null, 5, 6);
})
//     1
//   /   \ 
//  2     3
//   \      \   
//    4      5
//   /
//  6

describe('LinkStack TestCases', () => {

    test('PreOrder', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        PreOrder(biTree, fn);
        expect(collection).toEqual([1, 2, 4, 6, 3, 5])
    })

    test('InOrder', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        InOrder(biTree, fn);
        expect(collection).toEqual([2, 6, 4, 1, 3, 5])
    })

    test('PostOrder', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        PostOrder(biTree, fn);
        expect(collection).toEqual([6, 4, 2, 5, 3, 1])
    })

    test('PreOrder2', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        PreOrder2(biTree, fn);
        expect(collection).toEqual([1, 2, 4, 6, 3, 5])
    })

    test('InOrder2', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        InOrder2(biTree, fn);
        expect(collection).toEqual([2, 6, 4, 1, 3, 5])
    })

    test('PostOrder2', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        PostOrder2(biTree, fn);
        expect(collection).toEqual([6, 4, 2, 5, 3, 1])
    })

    test('LevelOrder', () => {
        const collection = [];
        const fn = x => collection.push(x.val)
        LevelOrder(biTree, fn);
        expect(collection).toEqual([1, 2, 3, 4, 5, 6])
    })
})