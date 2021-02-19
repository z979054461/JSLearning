import {
    InsertSort,
    BinaryInsertSort,
    ShellSort,
    BubbleSort,
} from '../src/Sort'

let arr, n;
let aws = [1, 2, 2, 4, 5, 5, 5, 7, 24, 26, 34, 34, 51, 126, 235, 326, 452, 523, 562, 1234];
beforeEach(() => {
    arr = [4, 5, 7, 452, 235, 126, 1234, 562, 2, 34, 5, 1, 24, 5, 326, 26, 34, 2, 51, 523];
    n = 20;
})
describe('Sort TestCases', () => {
    test('InsertSort', () => {
        expect(InsertSort(arr, n)).toStrictEqual(aws)
    })

    test('BinaryInsertSort', () => {
        expect(BinaryInsertSort(arr, n)).toStrictEqual(aws)
    })

    test('ShellSort', () => {
        expect(ShellSort(arr, n)).toStrictEqual(aws)
    })

    test('BubbleSort', () => {
        expect(BubbleSort(arr, n)).toStrictEqual(aws)
    })
})
