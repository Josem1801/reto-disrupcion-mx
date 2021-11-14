import React from "react";

function Button({ children, color = "text-white", className, ...props }) {
  return (
    <button
      {...props}
      className={`btn  bg-purple  fw-bold bottom-0 align-self-center ${className} ${color} `}
    >
      {children}
    </button>
  );
}

export default Button;
