import React from "react";

export default class JsxDemo extends React.Component {
  render() {
    let addressee = "world";
    //React 组件也能够返回存储在数组中的一组元素
    let arr = [
      // 不要忘记设置 key :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
    return (
      <>
        {arr}
        <div>Hello {addressee}!</div>
        <div />

        <div></div>

        <div>{false}</div>

        <div>{null}</div>

        <div>{undefined}</div>

        <div>{true}</div>
      </>
    );
  }
}
