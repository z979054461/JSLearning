import axios from 'axios';

function sum(a, b) {
    return a + b;
}

function add(a, b) {
    return a + b;
}

function fetchUser() {
    return axios.get('http://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(error => console.log(error));
}
export {
    sum,
    fetchUser
}