// const request = require('request');
import request from 'request'

export function fetchData() {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
            resolve(body);
        });
    })
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

export default {
    fetchData,
    add,
    subtract,
    multiply
}