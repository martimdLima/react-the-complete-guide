import React from "react";

import { withRouter} from "react-router-dom";

import Ingredient from "../Burguer/Ingredient/Ingredient";

import classes from "./Burguer.module.css";

// transforms an object of key value pairs into an array of burger ingredients
// where the value of that object is important to decide how many ingredients it's needed and the keys
// important for which type of ingredient is needed.
const burguer = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingrKey) => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) => {
                return <Ingredient key={ingrKey + i} type={ingrKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burguer}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burguer);
