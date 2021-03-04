import React from "react";

import classes from "./Input.module.css";

// The Input component is responsible for rendering an input conditionally
const Input = (props) => {
    let inputElement = null;

    // depending on the elementType provided, the switch statement supports this input types:
    // input, textarea, select
    // every input recieves an onChange listener that will react to any changes in the input
    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
