import React from "react";

const FancyButton = React.forwardRef(
  (
    props: { children: React.ReactNode },
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button ref={ref} className="FancyButton" onClick={() => alert("clicked")}>
      {props.children}
    </button>
  )
);

export default class ForWardRef extends React.Component {
  render() {
    const ref = React.createRef<HTMLButtonElement>();
    (window as any).refTest = ref;
    //ref:{current: button.FancyButton}
    return <FancyButton ref={ref}>Click me!</FancyButton>;
  }
}
