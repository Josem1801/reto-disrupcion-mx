import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import DayContainer from "../components/DayContainer";
import Header from "../components/Header";
import ModalAddTransaction from "../components/ModalAddTransaction";
import useTransaction from "../hooks/useTransaction";
import Button from "../components/Button";

function Home() {
  const currentMonth = Number(new Date(Date.now()).getMonth());
  const [month, setMonth] = useState(currentMonth);
  const [addTransaction, setAddTransaction] = useState(false);
  function handleModal() {
    setAddTransaction(true);
  }
  const { balance, earningsBalance, expenseBalance, transactions } =
    useTransaction(month);

  return (
    <section className="mx-auto vh-100 overflow-auto position-relative col-xs-12 col-sm-6 col-md-5 col-lg-3 pb-  bg-primary d-flex flex-column ">
      <Header handleMonth={(id) => setMonth(id)} currentMonth={month} />
      <div className="w-100 overflow-auto d-flex flex-column mb-5">
        <Dashboard
          balance={balance}
          earnings={earningsBalance}
          expense={expenseBalance}
        />
        <DayContainer data={transactions} month={month} />
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
