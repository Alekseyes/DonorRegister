import React from "react";

export function RadioButton(props) {
  return (
    <>
    <div className="form-check">
      <p>{props.title}</p>
      <input className="form-check-input"
        type="radio"
        name={props.fieldName}
        required={props.inputIsRequired}
        value={props.input1Value}
        onChange={props.onChange}
        checked={props.inputIsCheked === "да"}
      />
      <label className="form-check-label">{props.label1}</label>
    </div>

    <div className="form-check">
      <input className="form-check-input"
        type="radio"
        name={props.fieldName}
        required={props.inputIsRequired}
        value={props.input2Value}
        onChange={props.onChange}
        checked={props.inputIsCheked === "нет"}
      />
      <label className="form-check-label">{props.label2}</label>
    </div>
    </>
  );
}