import React from "react";

import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className="group">
      <input type="text" onChange={props.changed} value={props.currentName} />
      <span class="highlight"></span>
      <span class="bar"></span>
    </div>
  );
};

export default UserInput;
