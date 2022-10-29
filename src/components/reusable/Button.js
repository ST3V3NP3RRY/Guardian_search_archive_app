import React from "react";

const Button = ({ text, clickHandler }) => {
  return (
    <button className="btn" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
