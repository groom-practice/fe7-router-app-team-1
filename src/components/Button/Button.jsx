import React from "react";
import "./CSS/button.css";

const Button = ({ children, onClick, type = "button", disabled = false, className = "" }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`common-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
