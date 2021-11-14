import React, { createContext, useReducer } from "react";
import getTransactions from "../utils/getTransactions";

const GlobalContext = createContext();
const initialState = {
  id: "1",
  transactions: getTransactions(),
};
const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions
          .filter(
            ({ date }) => new Date(date).getMonth() === action.payload.month
          )
          .filter((_, id) => id !== action.payload.id),
      };

    default:
      throw new Error("Type invalid");
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  const value = { state, deleteTransaction, addTransaction };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
