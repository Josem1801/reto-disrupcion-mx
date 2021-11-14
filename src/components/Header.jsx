import React, { useState } from "react";
import months from "../utils/months";
function Header({ handleMonth, currentMonth }) {
  const [translateX, setTranslateX] = useState(currentMonth);
  return (
    <header
      className="row bg-purple rounded-bottom m-0 overflow-hidden position-relative"
      style={{ minHeight: 42 }}
    >
      <div
        className="btn-group d-flex align-items-center position-absolute top carousel-iner p-0"
        style={{
          height: 40,
          transform: `translateX(calc((50% - 50px) - ${translateX * 100}px))`,
        }}
      >
        {months.map((month, idx) => (
          <span
            key={idx}
            style={{ minWidth: 100 }}
            onClick={() => {
              handleMonth(idx);
              setTranslateX(idx);
            }}
            className={` align-items-center close transition text-center pointer text-white ${
              currentMonth == idx ? "fw-bold fs-4" : "fs-6"
            }`}
          >
            {month}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;
