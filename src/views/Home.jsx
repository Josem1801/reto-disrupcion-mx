import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import DayContainer from "../components/DayContainer";
import Header from "../components/Header";
import ModalAddTransaction from "../components/ModalAddTransaction";
import Button from "../components/Button";
import GlobalContext from "../contexts/GlobalContext";
import useTransaction from "../hooks/useTransaction";

function Home() {
  const currentMonth = Number(new Date(Date.now()).getMonth());
  const { getTransactions, transactions } = useContext(GlobalContext);
  const [month, setMonth] = useState(currentMonth);
  const [addTransaction, setAddTransaction] = useState(false);

  function handleModal() {
    setAddTransaction(true);
  }
  if (transactions.length > 0) {
    var { monthTransactions, balance, earningsBalance, expenseBalance } =
      useTransaction(transactions, month);
  }
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <section className="mx-auto vh-100 overflow-auto position-relative col-xs-12 col-sm-6 col-md-5 col-lg-3 pb-  bg-primary d-flex flex-column ">
      <Header handleMonth={(id) => setMonth(id)} currentMonth={month} />
      <div className="w-100 overflow-auto d-flex flex-column mb-5">
        <Dashboard
          balance={balance}
          earnings={earningsBalance}
          expense={expenseBalance}
        />

        <DayContainer data={monthTransactions} month={month} />
        <Button onClick={handleModal} className=" mb-3 position-fixed  py-2">
          Agregar Movimiento
        </Button>
        {addTransaction && (
          <ModalAddTransaction handleClose={() => setAddTransaction(false)} />
        )}
      </div>
    </section>
  );
}

export default Home;
