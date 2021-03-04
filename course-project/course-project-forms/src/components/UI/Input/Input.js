import React from "react";

import classes from "./Input.module.css";

// The Input component is responsible for rendering an input conditionally
const Input = (props) => {

    let inputElement = null;
    let validationError = null;
    // create an array that will hold all the css classes for each input
    const inputClasses = [classes.InputElement];

    // if the input as an invalid property, add the Invalid css class to the inputClasses array
    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    if (props.invalid && props.touched) {
        validationError = (<p className
        ={classes.validationError}>Please enter a valid  {props.valueType}!</p>);
    }

    // depending on the elementType provided, the switch statement supports this input types:
    // input, textarea, select
    // every input recieves an onChange listener that will react to any changes in the input
    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
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
                    className={inputClasses}
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
            {validationError}
        </div>
    );
};

export default Input;
