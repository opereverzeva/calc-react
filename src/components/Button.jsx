import React from "react";

const Button = props => {
  return (
    <button
      className={props.className}
      value={props.value}
      name={props.name}
      type={props.type}
      id={props.id}
      onClick={props.clickButton}
    >
      {props.value}
    </button>
  );
};

export default Button;
