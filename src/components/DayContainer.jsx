import React from "react";
import months from "../utils/months";
import TransactionCard from "./TransactionCard";
function DayContainer({ data, month }) {
  //Se modifica el array para obtener solo los dias
  let days = data
    ?.map((data) => new Date(data.date).getDate())
    .sort((a, b) => a + b); //Se ordena lo numeros de mayor a menor

  //Se ocupa Set para remover los dias repetidos
  days = [...new Set(days)];

  //Se obtiene el dia de hoy
  let today = new Date(Date.now()).getDate();
  //Se recorta el nombre del mes a las 3 primeras letras
  const monthStr = months[month].substr(0, 3);

  return (
    <div className="col-10 mx-auto ">
      {/* Se mapean lo dias que estan en el array */}
      {days?.map((dayTransaction, dayId) => {
        return (
          <div className="fw-bold row fs-6 mb-2" key={dayId}>
            <span className="p-0 mb-1">
              {dayTransaction === today
                ? "Hoy - "
                : dayTransaction === today - 1 && "Ayer - "}{" "}
              {dayTransaction} {monthStr}.
            </span>
            {/* Se filtran las transacciones que coincidan con el dia del map anterior*/}
            {data
              .filter(({ date }) => new Date(date).getDate() === dayTransaction)
              .reverse() //Se invierte el array para obtener las transacciones mas recientes
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
