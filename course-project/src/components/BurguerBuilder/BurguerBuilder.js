import React, { Component } from "react";

import BuildControls from "../Burguer/BuildControls/BuildControls";
import Burguer from "../Burguer/Burguer";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux";
import OrderSummary from "../Burguer/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 2,
    cheese: 1,
    meat: 3,
};

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients,
        };

        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        // to prevent the app from crashing from subtracting negative values, we check if the old count is less or equal to zero
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients,
        };

        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((ingrKey) => {
                return ingredients[ingrKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        alert("You selected to continue with your purchase!");
    };

    render() {
        // disables the less button, by spreading the ingredients object and loop through it,
        // checking if each ingredient is less than zero and returning true or false accordingly
        const disabledInfo = {
            ...this.state.ingredients,
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                    />
                </Modal>

                <Burguer ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;
