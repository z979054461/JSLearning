import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"

function Counter2({ value, onIncreaseClick }) {
  return (
    <div>
      <span style={{display:'block'}}>{value}</span>
      <button onClick={onIncreaseClick}>加一</button>
    </div>
  );
}
Counter2.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
  };
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}
const increaseAction = { type: "increase" };

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
