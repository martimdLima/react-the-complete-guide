import React, { useState, useEffect, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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

    // const { onInitIngredients } = props;
    const dispatch = useDispatch();

    const ings = useSelector((state) => {
        console.log(state);
        return state.burguerBuilder.ingredients;
    });
    const totalPrice = useSelector((state) => state.burguerBuilder.totalPrice);
    const error = useSelector((state) => state.burguerBuilder.error);
    const isAuthenticated = useSelector((state) => state.auth.tokenId !== null);

    const onIngredientAdded = (ingName) =>
        dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName) =>
        dispatch(actions.removeIngredient(ingName));
    const onInitIngredients = useCallback(
        () => dispatch(actions.initIngredients()),
        [dispatch]
    );
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) =>
        dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

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
        if (isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetAuthRedirectPath("/checkout");
            props.history.push("/auth");
        }
    };

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    };

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push("/checkout");
    };

    const disabledInfo = {
        ...ings,
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (ings) {
        burger = (
            <Aux>
                <Burger ingredients={ings} />
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(ings)}
                    ordered={purchaseHandler}
                    price={totalPrice}
                    isAuth={isAuthenticated}
                />
            </Aux>
        );
        orderSummary = (
            <OrderSummary
                ingredients={ings}
                price={totalPrice}
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

export default withErrorHandler(BurguerBuilder, axios);
