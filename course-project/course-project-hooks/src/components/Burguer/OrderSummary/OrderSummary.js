import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux/Aux";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        (ingrKey) => {
            return (
                <li key={ingrKey}>
                    <span style={{ textTransform: "capitalize" }}>
                        {ingrKey}
                    </span>{" "}
                    : {props.ingredients[ingrKey]}
                </li>
            );
        }
    );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>ingredients choosen: </p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total Price: {props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>
                CONTINUE
            </Button>
        </Aux>
    );
}

export default OrderSummary;

/* class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (ingrKey) => {
                return (
                    <li key={ingrKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {ingrKey}
                        </span>{" "}
                        : {this.props.ingredients[ingrKey]}
                    </li>
                );
            }
        );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>ingredients choosen: </p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total Price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}
export default OrderSummary; */
