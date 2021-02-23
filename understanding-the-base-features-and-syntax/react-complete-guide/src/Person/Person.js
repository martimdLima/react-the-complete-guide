import React from "react";
// in its simplest form, a component is a function returning some jsx.

// props (short for “properties”) and state are both plain JavaScript objects.
// While both hold information that influences the output of render,
// they are different in one important way:
// props get passed to the component (similar to function parameters)
// whereas state is managed within the component (similar to variables declared within a function).

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        This is {props.name} and it's {props.age} old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
