import React from "react";

const Child = (props) => {
  return (
    <div>
      <label>{props.inputLabel}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default Child;