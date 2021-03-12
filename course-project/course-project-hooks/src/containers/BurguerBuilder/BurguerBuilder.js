import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";

import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import BuildControls from "../../components/Burguer/BuildControls/BuildControls";
import OrderSummary from "../../components/Burguer/OrderSummary/OrderSummary";
import Burger from "../../components/Burguer/Burguer";

import Spinner from "../../components/UI/Spinner/Spinner";

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
export const BurguerBuilder = (props) => {
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, []);

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((ingrKey) => {
                return ingredients[ingrKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    };

    const purchaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true);
        } else {
            props.onSetAuthRedirectPath("/checkout");
            props.history.push("/auth");
        }
    };

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    };

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push("/checkout");
    };

    const disabledInfo = {
        ...props.ings,
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = props.error ? (
        <p>Ingredients can't be loaded!</p>
    ) : (
        <Spinner />
    );

    if (props.ings) {
        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(props.ings)}
                    ordered={purchaseHandler}
                    price={props.totalPrice}
                    isAuth={props.isAuthenticated}
                />
            </Aux>
        );
        orderSummary = (
            <OrderSummary
                ingredients={props.ings}
                price={props.totalPrice}
                purchaseCancelled={purchaseCancelHandler}
                purchaseContinue={purchaseContinueHandler}
            />
        );
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        ings: state.burguerBuilder.ingredients,
        totalPrice: state.burguerBuilder.totalPrice,
        error: state.burguerBuilder.error,
        isAuthenticated: state.auth.tokenId !== null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) =>
            dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) =>
            dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) =>
            dispatch(actions.setAuthRedirectPath(path)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(BurguerBuilder, axios));
