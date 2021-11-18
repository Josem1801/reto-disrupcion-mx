import Button from "../components/Button";
import React, { useContext, useRef } from "react";
import GlobalContext from "../contexts/GlobalContext";
function ModalAddTransaction({ handleClose }) {
  const { addTransaction } = useContext(GlobalContext);
  const titleRef = useRef();
  const amountRef = useRef();

  const handleAddTransaction = () => {
    const amount = amountRef.current.value;
    const title = titleRef.current.value;
    if (amount.length > 0 && title.length > 0) {
      const tx = {
        amount: Number(amount),
        title: title,
        date: new Date(Date.now()),
      };
      addTransaction(tx);

      handleClose(false);
    } else {
      alert("Campos no validos");
    }
  };
  return (
    <div className="position-fixed border border-purple rounded-3 top-50 start-50 translate-middle bg-white px-4 py-5 d-flex flex-column ">
      <label className="form-label  fw-bold">Titulo</label>
      <input
        className="row form-control m-0 mb-3"
        type="text"
        placeholder="ej. Pago recibido de..."
        ref={titleRef}
      />
      <label className="form-label fw-bold m-0">Cantidad</label>
      <label className="form-label ">
        (negativo, gastos - positivo ingresos)
      </label>
      <input
        className="row form-control m-0 mb-3"
        type="number"
        placeholder="ej. -130 ó 130"
        ref={amountRef}
      />
      <div className="d-flex justify-content-evenly">
        <Button className="mx-auto" onClick={handleAddTransaction}>
          Agregar
        </Button>
        <Button
          color="text-purple"
          className="mx-auto bg-white border border-purple"
          onClick={handleClose}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default ModalAddTransaction;
