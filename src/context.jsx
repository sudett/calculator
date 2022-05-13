import { createContext, useReducer } from "react";

import {
  additionHandler,
  subtractionHandler,
  multiplicationHandler,
  divisionHandler,
} from "./utils";

const initialState = {
  numbers: {
    number1: "",
    number2: "",
  },
  resultNumber: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        numbers: {
          ...state.numbers,
          [action.payload.name]: action.payload.value,
        },
      };

    case "clear":
      return {
        ...state,
        numbers: {
          number1: "",
          number2: "",
        },
      };

    case "addition":
      return {
        ...state,
        resultNumber: additionHandler(
          state.numbers.number1,
          state.numbers.number2
        ),
      };

    case "subtraction":
      return {
        ...state,
        resultNumber: subtractionHandler(
          state.numbers.number1,
          state.numbers.number2
        ),
      };

    case "multiplication":
      return {
        ...state,
        resultNumber: multiplicationHandler(
          state.numbers.number1,
          state.numbers.number2
        ),
      };

    case "division":
      return {
        ...state,
        resultNumber: divisionHandler(
          state.numbers.number1,
          state.numbers.number2
        ),
      };

    default:
      return state;
  }
};

export const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalculationContext.Provider>
  );
};
