import React from "react";
import months from "../utils/months";
import TransactionCard from "./TransactionCard";
function DayContainer({ data, month }) {
  //Array modificado para obtener el numero del mes

  const days = data
    ?.filter(
      ({ date }, idx) =>
        new Date(data[idx - 1]?.date).getDate() !== new Date(date).getDate()
    )
    .map((tx) => ({
      amount: tx.amount,
      title: tx.title,
      day: new Date(tx.date).getDate(),
    }));
  //Se obtiene el dia de hoy
  let today = new Date(Date.now()).getDate();
  //Se recorta el nombre del mes a las 3 primeras letras
  const monthStr = months[month].substr(0, 3);

  return (
    <div className="col-10 mx-auto ">
      {days?.reverse().map(({ day: dayTransaction }, dayId) => {
        return (
          <div className="fw-bold row fs-6 mb-2" key={dayId}>
            <span className="p-0 mb-1">
              {dayTransaction === today
                ? "Hoy - "
                : dayTransaction === today - 1 && "Ayer - "}{" "}
              {dayTransaction} {monthStr}.
            </span>
            {/* Se filtran las transacciones del mismo dia*/}
            {data
              .filter(({ date }) => new Date(date).getDate() === dayTransaction)
              .reverse()
              .map(({ amount, title, id }, idx) => (
                <TransactionCard
                  description={title}
                  amount={amount}
                  key={idx}
                  id={id}
                  idx={idx}
                  month={month}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default DayContainer;
