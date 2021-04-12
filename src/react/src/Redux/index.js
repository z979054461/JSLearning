// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
import React, { Component } from 'react'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'


const store = createStore(counter);

export default class ReduxDemo extends Component {
  constructor(props) {
    super(props);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    store.subscribe(() => this.forceUpdate())
    store.subscribe((...args) => console.log(args))
  }
  onDecrement() {
    store.dispatch({ type: 'DECREMENT' })
  }
  onIncrement() {
    store.dispatch({ type: 'INCREMENT' })
  }
  render() {
    return <Counter
      value={store.getState()}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
    // onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
    // onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
    />
  }
}