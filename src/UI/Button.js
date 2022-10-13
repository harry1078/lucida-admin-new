import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes["submit-button"]}`}
      id={props.id ? props.id : ""}
      type={props.type ? props.type : "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
