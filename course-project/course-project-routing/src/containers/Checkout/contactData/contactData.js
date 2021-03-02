import React, { Component } from "react";

import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";

import classes from "./contactData.module.css";

class contactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        ingredients: null,
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "User 1",
                address: {
                    street: "Some random street",
                    zipCode: "45245",
                    Country: "kekistan",
                },
                email: "randomemail@test.com",
            },
            deliveryMethod: "express",
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false});
                this.props.history.push("/")
            })
            .catch((error) => {
                this.setState({ loading: false});
            });
    };

    render() {
        let form = (
            <form>
                <input
                    className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    className={classes.Input}
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="street"
                    placeholder="Street"
                />
                <input
                    className={classes.Input}
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
