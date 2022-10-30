import React from "react";
import "./Button.css";

const Button = ({ text, clickHandler }) => {
  return (
    <button className="btn fav-btn" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
