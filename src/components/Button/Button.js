import React from "react";
import { connect } from "react-redux";
import { countIncrement, countDecrement } from "../../store/actions";

const Button = (props) => {
  const { count, countDecrement, countIncrement } = props;
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={countIncrement}>Click me to increment</button>
      <button onClick={countDecrement}>Click me to decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
  };
};

const mapActionCreators = {
  countDecrement,
  countIncrement,
};

export default connect(mapStateToProps, mapActionCreators)(Button);
