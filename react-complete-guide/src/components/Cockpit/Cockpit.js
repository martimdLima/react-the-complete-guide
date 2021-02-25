import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
    });

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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>A React App</p>
            <button className={buttonClasses.join(" ")} onClick={props.onClick}>
                Toogle Persons
            </button>
        </div>
    );
};

export default cockpit;
