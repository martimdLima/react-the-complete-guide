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

    // the inputChangedHandler will get an event object as it will automatically be passed by react,
    // if this method is attached to an event listener which it is.
    inputChangedHandler = (event, inputIdentifier) => {
        // create a shallow clone of the orderForm object
        const updatedOrderForm = { ...this.state.orderForm };

        // clone all the nested objects contained in the orderForm object
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

        // set the updatedFormElement value and set this equal to event target value
        // set the updatedOrderForm set it equal to the updatedFormElement.
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        // call this.setState and set order form to updated order form.
        this.setState({ orderForm: updatedOrderForm });
    };

    render() {
        // create and initialize the form elements array
        const formElementsArray = [];

        // loop through all the keys in the form elements array
        for (let key in this.state.orderForm) {
            // retrieve each form elements config
            let formElemConfig = this.state.orderForm[key];

            // push a new object into the array with the id and config of the form element
            formElementsArray.push({
                id: key,
                config: formElemConfig,
            });
        }

        let form = (
            <form>
                {formElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) =>
                            this.inputChangedHandler(event, formElement.id)
                        }
                    />
                ))}

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
