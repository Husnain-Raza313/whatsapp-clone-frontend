import React from "react";

const InputComponent = (props) => {
  return (
    <div className="form-outline form-white mb-4">
      <input
        type={props.type}
        className={props.className}
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
