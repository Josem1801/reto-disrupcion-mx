const useTransaction = (transactions, month) => {
  if (transactions === undefined) {
    throw new Error("useTransaction must be used within a GlobalProvider");
  }

  const monthTransactions = transactions.filter(
    ({ date }) => new Date(date).getMonth() === month
  );

  let balance = 0;
  let earningsBalance = 0;
  let expenseBalance = 0;

  if (month) {
    /* Se suma el balance */
    monthTransactions.map((data) => {
      balance = balance + data.amount;
    });
    /* Se suma el balance de "Ingresos" */
    monthTransactions
      .filter((data) => data.amount > 0)
      .map((balance) => {
        earningsBalance += balance.amount;
      });
    /* Se suma el balance de "Gastos" */
    monthTransactions
      .filter((data) => data.amount < 0)
      .map((balance) => {
        expenseBalance -= balance.amount;
      });

    return {
      balance,
      expenseBalance,
      earningsBalance,
      monthTransactions,
    };
  }
  return { transactions };
};

export default useTransaction;
