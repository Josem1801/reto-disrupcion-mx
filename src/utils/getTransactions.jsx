import { initialState } from "./data";

const getTransactions = () => {
  const transactions = window.localStorage.getItem("TRANSACTIONS");
  if (transactions) {
    return JSON.parse(transactions);
  } else {
    return initialState.transactions;
  }
};

export default getTransactions;
