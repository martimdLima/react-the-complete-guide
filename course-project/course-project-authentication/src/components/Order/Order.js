import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
    const ingredients = [];
    for (let igrName in props.ingredients) {
        ingredients.push({ name: igrName, amount: props.ingredients[igrName] });
    }

    const ingredientsOutput = ingredients.map((igr) => {
        return (
            <span className={classes.Ingredients} key={igr.name}>
                {igr.name} ({igr.amount})
            </span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>
                Price:{" "}
                <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
            </p>
        </div>
    );
};

export default Order;
