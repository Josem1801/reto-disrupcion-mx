import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../contexts/GlobalContext";
function CardTransaction({ description, amount, id, month }) {
  const sign = amount > 0 ? "+" : "-";
  console.log(id);
  const color = amount > 0 ? "text-green " : "text-red ";
  const { deleteTransaction } = useContext(GlobalContext);
  const handleDelete = () => {
    deleteTransaction({ month, id });
  };
  return (
    <div className="w-100 bg-white d-flex align-items-center px-2 py-2 rounded mb-2 ">
      <span
        onClick={handleDelete}
        className={`p-3  border transition pointer rounded-circle delete-card  `}
      ></span>
      <div className="ps-2 fw-normal flex-grow-1">{description}</div>
      <div className="d-flex align-items-center">
        <span className={`pe-2 fw-bold fs-5 ${color}`}>{`${sign}$${Math.abs(
          amount
        )}`}</span>
        <FontAwesomeIcon
          className="row mx-auto pointer"
          icon={faChevronDown}
          style={{ fontSize: 10 }}
        />
      </div>
    </div>
  );
}

export default CardTransaction;
