import {
    sum,
    fetchUser
} from '../src/sum';
// const fetchUser = require('./sum')

// 1. 相等判断：toBe 使用 Object.is 来判断相等，
// toEqual 会递归判断 Object 的每一个字段，
// 对数值来说 toBe 和 toEqual 相同；
test("两个数字相加", () => {
    expect(sum(1, 2)).not.toBe(2);
})

// test('object assignment', () => {
//     const data = {
//         one: 1
//     };
//     data['two'] = 2;
//     expect(data).toEqual({
//         one: 1,
//         two: 2
//     });
// });

// // 2. 判断符点数：可使用 toBeCloseTo 来解决 JS 浮点精度带来的问题，如下示例；
// test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2; // 0.30000000000000004
//     expect(value).toBeCloseTo(0.3); // 测试通过
// });

// test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
//     expect.assertions(1);
//     return fetchUser()
//         .then(data => {
//             expect(data.name).toBe('Leanne Graham');
//         });
// });
// //上面调用了expect.assertions(1)，它能确保在异步的测试用例中，
// //有一个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。

// test('mock', () => {
//     const mockCallback = jest.fn(x => 42 + x);
//     [0, 1].forEach(mockCallback);
//     console.log(mockCallback.mock.calls, 'mockCallback.mock.calls')
//     // Mock函数被调用两次
//     expect(mockCallback.mock.calls.length).toBe(2);
//     // 第一次调用Mock函数时，第一个参数为0
//     expect(mockCallback.mock.calls[0][0]).toBe(0);
//     // 第二次调用Mock函数时，第一个参数为1
//     expect(mockCallback.mock.calls[1][0]).toBe(1);
//     // 第一次调用Mock函数的返回值为42
//     expect(mockCallback.mock.results[0].value).toBe(42);

//     // const myMock = jest.fn();
//     // const a = new myMock();
//     // const b = {};
//     // const bound = myMock.bind(b);
//     // bound();
//     // console.log(myMock.mock.instances);
//     // // > [ <a>, <b> ]

//     // Mock 函数还可以通过工具函数模拟返回值。
//     const myMock = jest.fn();
//     console.log(myMock());
//     // > undefined
//     myMock
//         .mockReturnValueOnce(10)
//         .mockReturnValueOnce('x')
//         .mockReturnValue(true);
//     console.log(myMock(), myMock(), myMock(), myMock());
//     // > 10, 'x', true, true
// });