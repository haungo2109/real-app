import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/actions";
import PropTypes from "prop-types";

const App = function ({ counter, increment, decrement }) {
  return (
    <>
      <div className="info">
        <h2>This app created by Hau</h2>
        <p>Counter is {counter}</p>
        <button onClick={increment}>Click to increment</button>
        <button onClick={decrement}>Click to decrement</button>
      </div>
    </>
  );
};

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ counter: state.counter.counter });

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
