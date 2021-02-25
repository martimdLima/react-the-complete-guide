import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
    // with an array as a second argument, useEffect will only run when changes occour in the elements that compose the array

    useEffect(() => {
        console.log("[Cockpit.js] 1st useEffect");

        const timer = setTimeout(() => {
            alert("Saved data to cloud!");
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work in 1st useEffect");
        };
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect");
        };
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
