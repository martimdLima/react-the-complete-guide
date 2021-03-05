import React, { Component } from "react";
import { connect } from "react-redux";
import BuildControls from "../../components/Burguer/BuildControls/BuildControls";
import Burger from "../../components/Burguer/Burguer";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import OrderSummary from "../../components/Burguer/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

import * as actionTypes from "../../store/actions";

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {
    state = {
        totalPrice: 4,
        purchasing: false,
        loading: false,
        error: null,
    };

    componentDidMount() {
        /*         axios
            .get(
                "https://react-course-project-31af6-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
            )
            .then((response) => {
                this.setState({ ingredients: response.data });
            })
            .catch((error) => {
                this.setState({ error: error });
            }); */
    }

    /* addIngredientHandler = (type) => {
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

    */

    updatePurchaseState() {
        const sum = Object.keys(this.props.ings)
            .map((ingrKey) => {
                return this.props.ings[ingrKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        this.props.history.push("/checkout");
    };

    render() {
        const disabledInfo = {
            ...this.props.ings,
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error ? (
            <p>Ingredients can't be loaded!</p>
        ) : (
            <Spinner />
        );

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState()}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ings}
                    price={this.props.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                />
            );
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) =>
            dispatch({
                type: actionTypes.ADD_INGREDIENT,
                payload: { ingredientName: ingName },
            }),
        onIngredientRemoved: (ingName) =>
            dispatch({
                type: actionTypes.REMOVE_INGREDIENT,
                payload: { ingredientName: ingName },
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(BurguerBuilder, axios));
