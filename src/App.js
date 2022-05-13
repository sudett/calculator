import React, { useContext } from "react";
import { CalculationContext } from "./context";

import "./App.css";

const App = () => {
  const { numbers, resultNumber, dispatch } = useContext(CalculationContext);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "change", payload: { name, value } });
  };

  const keyPressHandlre = (e) => {
    // check numbers validity
    if (e.which !== 8 && (e.which < 48 || e.which > 57)) e.preventDefault();
  };

  const formSubmission = (e) => {
    e.preventDefault();
    dispatch({ type: "clear" });
  };

  return (
    <form className="App" onSubmit={formSubmission}>
      <input
        className="input"
        type="number"
        name="number1"
        value={numbers.number1}
        onChange={inputChangeHandler}
        onKeyDown={keyPressHandlre}
      />
      <input
        className="input"
        type="number"
        name="number2"
        value={numbers.number2}
        onChange={inputChangeHandler}
        onKeyDown={keyPressHandlre}
      />
      <div className="buttons-container">
        <button className="btn" onClick={() => dispatch({ type: "addition" })}>
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "subtraction" })}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "multiplication" })}
        >
          *
        </button>
        <button className="btn" onClick={() => dispatch({ type: "division" })}>
          /
        </button>
      </div>

      <p className="text">Your calculation result is: {resultNumber} </p>
    </form>
  );
};

export default App;
