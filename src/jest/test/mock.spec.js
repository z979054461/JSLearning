import {
    forEach
} from '../src/mock'

test('test forEach', () => {
    const a = {
        __proto__: {
            mm: 'hello'
        },
        b: 'aa',
    };
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback, a);

    // 此 mock 函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2);

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 第一次函数调用的返回值是 42
    expect(mockCallback.mock.results[0].value).toBe(42);
    console.log(mockCallback, mockCallback.mock)


    const myMock = jest.fn();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());

    const filterTestFn = jest.fn();
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    console.log([1, 2].filter(filterTestFn))

})