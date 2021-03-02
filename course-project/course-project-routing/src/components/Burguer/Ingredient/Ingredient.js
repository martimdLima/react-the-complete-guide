import React, { Component } from "react";

import PropTypes from "prop-types";

import classes from "./Ingredient.module.css";

// the Ingredient component responsible for the single ingredient
class Ingredient extends Component {
    render() {
        let selectedIngredient = null;

        // switch statement handles css classes for each corresponding ingredient
        switch (this.props.type) {
            case "bread-bottom":
                selectedIngredient = (
                    <div className={classes.BreadBottom}></div>
                );
                break;
            case "bread-top":
                selectedIngredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case "meat":
                selectedIngredient = <div className={classes.Meat}></div>;
                break;
            case "cheese":
                selectedIngredient = <div className={classes.Cheese}></div>;
                break;
            case "bacon":
                selectedIngredient = <div className={classes.Bacon}></div>;
                break;
            case "salad":
                selectedIngredient = <div className={classes.Salad}></div>;
                break;
            default:
                selectedIngredient = null;
        }

        return selectedIngredient;
    }
}

// propTypes ensures that the inputs passed are the correct type
Ingredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Ingredient;
