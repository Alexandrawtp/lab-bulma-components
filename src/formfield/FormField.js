import React from "react";

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <input className="input">{props.input}</input>
    </div>
  );
}

export default FormField;
