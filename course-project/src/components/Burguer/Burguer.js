import React from "react";

import Ingredient from "../Burguer/Ingredient/Ingredient";

import classes from "./Burguer.module.css";


// transforms an object of key value pairs into an array of burger ingredients
// where the value of that object is important to decide how many ingredients it's needed and the keys
// important for which type of ingredient is needed.
const burguer = (props) => {
    
    const transformedIngredients = Object.keys(props.ingredients).map(
        (ingrKey) => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) => {
                return <Ingredient key={ingrKey + i} type={ingrKey} />;
            });
        }
    );

    return (
        <div className={classes.Burguer}>
            <Ingredient type="bread-top" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default burguer;
