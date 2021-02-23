import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>First Paragraph {props.username}</p>
      <p>Second Paragraph {props.username}</p>
    </div>
  );
};

export default UserOutput;
