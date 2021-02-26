import React, { Component } from "react";

import BuildControls from "../Burguer/BuildControls/BuildControls";
import Burguer from "../Burguer/Burguer";

import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 2,
    cheese: 1,
    meat: 3,
}

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
    
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        //const ingredientPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurguerBuilder;
