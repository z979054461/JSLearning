// jest.mock('request');
// import request from 'request';
// console.log(request);


// import fetchData from '../src/func'
test('should return data when fetchData request success', () => {
    // fetchData = jest.fn();
    // fetchData.mockResolvedValue({
    //     name: 'sam'
    // })
    // return fetchData().then(res => {
    //     expect(res).toEqual({
    //         name: 'sam'
    //     })
    // })

    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
})