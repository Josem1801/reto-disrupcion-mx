export default function getTransactionsLS() {
  const transactions = window.localStorage.getItem("TRANSACTIONS");
  if (transactions) {
    return JSON.parse(transactions);
  } else {
    window.localStorage.setItem("TRANSACTIONS", JSON.stringify([]));
  }
}
