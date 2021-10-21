import React, { useRef } from "react";

/**
 * 类组件的ref
 */
class CustomTextInput extends React.Component {
  textInput: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current?.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
class AutoFocusTextInput extends React.Component {
  textInput: React.RefObject<any>;
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
    console.log(this.textInput.current);
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

/**
 * function组件的ref
 */
function FunctionCustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null);
  console.log({ textInput });
  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

/**
 * 回调Refs
 */
class CbCustomTextInput extends React.Component {
  textInput: any;
  constructor(props) {
    super(props);
    this.textInput = null;
  }

  focusTextInput = () => {
    // 使用原生 DOM API 使 text 输入框获得焦点
    if (this.textInput) this.textInput.focus();
  };

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input type="text" ref={(element) => (this.textInput = element)} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

/**
 * 回调Function Refs
 */
function CbFunctionCustomTextInput(props:{inputRef}) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}
function CbFunctionCustomTextInputParent() {
  const inputElement = useRef();
  console.log(inputElement)
  return <CbFunctionCustomTextInput inputRef={(el) => (inputElement.current = el)} />;
}


export default CbFunctionCustomTextInputParent;
