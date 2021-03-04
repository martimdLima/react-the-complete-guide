import React, { Component } from "react";

import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import classes from "./contactData.module.css";

class contactData extends Component {
    state = {
        orderForm: this.createOrderForm(),
        loading: false,
    };

    createOrderForm() {
        return {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name",
                },
                value: "",
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Street",
                },
                value: "",
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your ZipCode",
                },
                value: "",
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Country",
                },
                value: "",
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Email",
                },
                value: "",
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {
                            value: "fastest",
                            displayValue: "Fastest",
                        },
                        {
                            value: "cheapest",
                            displayValue: "Cheapest",
                        },
                    ],
                },
                value: "",
            },
        };
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form>
                <Input elementType="..." elementConfig="..." value="..." />
                <Input
                    inputtype="input"
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                />
                <Input
                    inputtype="input"
                    type="text"
                    name="street"
                    placeholder="Street"
                />
                <Input
                    inputtype="input"
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                />
                <Button btnType="Success" clicked={this.orderHandler}>
                    Order
                </Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default contactData;
