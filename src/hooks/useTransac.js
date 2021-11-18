import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
function useTransac(month) {
  const { transactions } = useContext(GlobalContext);
  if (transactions === undefined) {
    throw new Error("useTransaction must be used within a GlobalProvider");
  }

  let balance = 0;
  let earningsBalance = 0;
  let expenseBalance = 0;

  if (month) {
    const monthTransaction = transactions
      .filter(({ date }) => new Date(date).getMonth() === month)
      .map((transactions) => transactions);

    /* Se suma el balance */
    monthTransaction.map((data) => {
      balance = balance + data.amount;
    });
    /* Se suma el balance de "Ingresos" */
    monthTransaction
      .filter((data) => data.amount > 0)
      .map((balance) => {
        earningsBalance += balance.amount;
      });
    /* Se suma el balance de "Gastos" */
    monthTransaction
      .filter((data) => data.amount < 0)
      .map((balance) => {
        expenseBalance -= balance.amount;
      });

    return {
      balance,
      expenseBalance,
      earningsBalance,
      monthTransaction,
    };
  }
  return { transactions };
}
export default useTransac;
