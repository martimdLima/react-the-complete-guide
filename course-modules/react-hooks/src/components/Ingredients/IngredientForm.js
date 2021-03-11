import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
    const inputState = useState({
        title: "",
        amount: "",
    });

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
                            value={inputState[0].title}
                            type="text"
                            id="title"
                            onChange={(event) =>
                                inputState[1]({ title: event.target.value })
                            }
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            value={inputState[0].amount}
                            type="number"
                            id="amount"
                            onChange={(event) =>
                                inputState[1]({ amount: event.target.value })
                            }
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
