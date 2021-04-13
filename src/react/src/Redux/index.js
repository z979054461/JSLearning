// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
//redux中间件的实质就是对store.dispatch进行重定义
import logger from "redux-logger";
//redux-thunk解决的问题：
// 1.重复代码太多
// 2.竞争问题：多次调用时（连续点击），第一次的结果会影响后续结果
// 3.统一同步异步的代码行为（类似async），component 不用关心这个 action 是异步还是同步的
// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// https://segmentfault.com/a/1190000037437347
import thunk from "redux-thunk";

//高级的异步流程控制库:redux-sage   redux-loop

const store = createStore(counter, applyMiddleware(thunk, logger));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const mockFetch = (...params) =>
  new Promise((resolve) => {
    sleep(2000).then(() => {
      console.log("参数列表：", params);
      resolve(
        Array.from({ length: 5 }).map((item, idx) => ({
          id: idx,
          text: `item${idx}`,
        }))
      );
    });
  });

export default class ReduxDemo extends Component {
  constructor(props) {
    super(props);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onClickLoading = this.onClickLoading.bind(this);
    this.onClear = this.onClear.bind(this);
    store.subscribe(() => this.forceUpdate());
    store.subscribe((...args) => console.log(args));
  }
  onDecrement() {
    store.dispatch({ type: "DECREMENT" });
  }
  onIncrement() {
    store.dispatch({ type: "INCREMENT" });
  }
  onClickLoading() {
    // store.dispatch({ type: "SET_LOADING", payload: true });
    // mockFetch()
    //   .then((res) => {
    //     store.dispatch({ type: "SET_DATA", payload: res });
    //   })
    //   .catch((err) => {})
    //   .finally(() => store.dispatch({ type: "SET_LOADING", payload: false }));

    store.dispatch(this.fetchData("hello", "world"));
  }
  //!!!!!!!!返回一个函数来接收dispatch作为第一个参数
  fetchData(...params) {
    return (dispatch) => {
      dispatch({ type: "SET_LOADING", payload: true });
      return mockFetch(...params)
        .then((res) => {
          dispatch({ type: "SET_DATA", payload: res });
        })
        .catch((err) => {})
        .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
    };
  }
  onClear() {
    store.dispatch({ type: "SET_DATA", payload: [] });
  }
  render() {
    return (
      <Counter
        loading={store.getState().loading}
        value={store.getState().count}
        data={store.getState().data}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        onClickLoading={this.onClickLoading}
        onClear={this.onClear}
        // onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
        // onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
      />
    );
  }
}
