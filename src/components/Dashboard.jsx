import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Dashboard({ balance, earnings, expense }) {
  return (
    <div className="row bg-white rounded-3 col-10 mx-auto my-3 text-center fw-bold">
      <div className=" col-12 text-center mx-auto er pt-2 fs-5">
        Balance del mes
      </div>
      <span className=" fs-1 text-purple ">
        ${typeof balance == "number" ? balance : " ---"}
      </span>
      <div className="row mx-0 my-2 d-flex align-items-center justify-content-center">
        <div className="container col-5 text-green">
          <span className="row justify-content-center">Ingresos</span>
          <span className=" fs-4">+${earnings}</span>
        </div>
        <div className="col-2 h-50">
          <div className=" vr h-100"></div>
        </div>
        <div className="container col-5 text-red">
          <span className="row justify-content-center">Gastos</span>
          <span className=" fs-4">-${expense}</span>
        </div>
        <p className="text-muted col-12 mx-auto my-2 fs-6 fw-normal">
          Ver analíticas
          <FontAwesomeIcon className="row mx-auto" icon={faChevronDown} />
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
