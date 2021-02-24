import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-blocking",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <p>{props.character}</p>
    </div>
  );
};

export default Char;
