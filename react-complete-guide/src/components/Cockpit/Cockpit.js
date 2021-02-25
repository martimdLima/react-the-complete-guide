import React from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let buttonClasses = [classes.Button];

  if (props.showPersons) {
    buttonClasses.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(" ")}>A React App</h1>
      <button className={buttonClasses.join(" ")} onClick={props.onClick}>
        Toogle Persons
      </button>
    </div>
  );
};

export default cockpit;
