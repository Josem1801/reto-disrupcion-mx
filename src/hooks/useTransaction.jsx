import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useTransaction = (month) => {
  const context = useContext(GlobalContext);
  let balance = 0;
  let earningsBalance = 0;
  let expenseBalance = 0;
  if (context === undefined) {
    throw new Error("useTransaction must be used within a GlobalProvider");
  }
  if (typeof month === "number") {
    const transactions = context.state.transactions
      .filter(({ date }) => new Date(date).getMonth() === month)
      .map((transactions) => transactions);

    if (transactions.length > 0) {
      /* Se suma el balance */
      transactions.map((data) => {
        balance = balance + data.amount;
      });
      /* Se suma el balance de "Ingresos" */
      transactions
        .filter((data) => data.amount > 0)
        .map((balance) => {
          earningsBalance += balance.amount;
        });
      /* Se suma el balance de "Gastos" */
      transactions
        .filter((data) => data.amount < 0)
        .map((balance) => {
          expenseBalance -= balance.amount;
        });
    }
    return { balance, expenseBalance, earningsBalance, transactions };
  }
  return context;
};

export default useTransaction;
