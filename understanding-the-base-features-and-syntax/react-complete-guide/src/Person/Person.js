import React from "react";
// in its simplest form, a component is a function returning some jsx.

const person = (props) => {
  return <p>This is {props.name} that is {props.age} old!</p>;
};

export default person;
