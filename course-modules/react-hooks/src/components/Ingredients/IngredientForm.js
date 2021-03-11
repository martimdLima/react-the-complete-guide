import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
    // What is a Hook? A Hook is a special function that lets you “hook into” React features.
    // When would I use a Hook? If you write a function component and realize you need to add some state to it,
    // previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
    // useState is a Hook that lets you add React state to function components.
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        // ...
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            value={enteredTitle}
                            type="text"
                            id="title"
                            onChange={(event) => {
                                setEnteredTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            value={enteredAmount}
                            type="number"
                            id="amount"
                            onChange={(event) => {
                                setEnteredAmount(event.target.value);
                            }}
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
