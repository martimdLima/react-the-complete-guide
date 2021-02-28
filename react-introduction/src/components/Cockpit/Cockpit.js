import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    // The returned object will persist for the full lifetime of the component.
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // with an array as a second argument, useEffect will only run when changes occour in the elements that compose the array
    useEffect(() => {
        console.log("[Cockpit.js] 1st useEffect");

        // setTimeout(() => {
        //     alert("Saved data to cloud!");
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
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

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>A React App</p>
            <button
                ref={toggleButtonRef}
                className={buttonClasses.join(" ")}
                onClick={props.onClick}>
                Toogle Persons
            </button>
            {/*             <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Login</button>
        </div>
    );
};

// React.memo only checks for prop changes.
// If your function component wrapped in React.memo has a useState or useContext Hook in its implementation,
// it will still rerender when state or context change.
export default React.memo(cockpit);
