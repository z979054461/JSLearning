// import axios from 'axios';
// import Users from '../src/user';
// jest.mock('axios');


test('should fetch users', () => {

    // const users = [{
    //     name: 'Bob'
    // }];
    // const resp = {
    //     data: users
    // };
    // axios.get.mockResolvedValue(resp);

    // // or you could use the following depending on your use case:
    // // axios.get.mockImplementation(() => Promise.resolve(resp))

    // return Users.all().then(data => expect(data).toEqual(users));


    const myMockFn = jest.fn(cb => cb(null, true));

    myMockFn((err, val) => console.log(val));
    // > true

    // const fetchData = jest.fn();
    // fetchData.mockReturnValue("bar");
    // fetchData.mockResolvedValue({
    //     name: 'sam'
    // });
    // fetchData().then(res => console.log(res))
});