import React, { useReducer } from "react";
import transactionReducer from "./transactionReducer";
import fetchTransactions from "../utils/fetchTransactions";
import GlobalContext from "./GlobalContext";
import getTransactionsLS from "../utils/getTransactionsLS";
import deleteTransactionAPI from "../utils/deleteTransactionAPI";
import postTransaction from "../utils/postTransaction";
const GlobalProvider = ({ children }) => {
  const initialState = {
    transactions: getTransactionsLS(),
  };
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  // Actions
  function deleteTransaction({ id, idx, month }) {
    deleteTransactionAPI(id);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: { idx, month },
    });
  }
  function addTransaction(transaction) {
    postTransaction(transaction);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  async function getTransactions() {
    try {
      const transactions = await fetchTransactions();
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: transactions,
      });
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }

  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    getTransactions,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
