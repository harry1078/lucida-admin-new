import React from "react";
import "./FormInputStyles.css";

const FormInput = (props) => {
  return (
    <div className="forminput-container">
      <label className="label">{props.label}</label>
      <input
        className="input"
        type={props.type ? props.type : "text"}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        accept={props.accept}
      />
    </div>
  );
};
export default FormInput;
