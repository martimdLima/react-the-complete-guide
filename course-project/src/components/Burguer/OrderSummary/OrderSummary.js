import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingrKey) => {
        return (
            <li key={ingrKey}>
                <span style={{ textTransform: "capitalize" }}>{ingrKey}</span> :{" "}
                {props.ingredients[ingrKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>ingredients choosen: </p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;
