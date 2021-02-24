import React from "react";

const Validation = (props) => {
  return (
    <div>
      {props.userInputLenght >= 5 ? (
        <p>Text is long enough</p>
      ) : (
        <p>Text is too short</p>
      )}
    </div>
  );
};

export default Validation;
