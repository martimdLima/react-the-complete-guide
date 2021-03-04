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

    // creates the order form
    createOrderForm() {
        return {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    valueType: "name",
                    placeholder: "Your Name",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    valueType: "street",
                    placeholder: "Your Street",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    valueType: "zipcode",
                    placeholder: "Your ZipCode",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 8,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    valueType: "country",
                    placeholder: "Your Country",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    valueType: "email address",
                    placeholder: "Your Email",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" },
                    ],
                },
                value: "",
                valid: false,
            },
        };
    }

    // the orderHandler is responsible for the orders submission
    orderHandler = (event) => {
        event.preventDefault();

        // extract the data that we want to submit.
        // All the data is already managed in this state, in our form object here,
        //which value is updated all the time with two way binding.
        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            // set formData for a given form element identifier equal to this.state.orderForm
            // for the form element identifier and there access the value
            formData[formElementIdentifier] = this.state.orderForm[
                formElementIdentifier
            ].value;
        }

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
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

    // the inputChangedHandler is responbile for updating the input fields with the user input
    // it will get an event object as it will automatically be passed by react if this method is attached to an event listener which it is.
    inputChangedHandler = (event, inputIdentifier) => {
        // create a shallow clone of the orderForm object
        const updatedOrderForm = { ...this.state.orderForm };

        // clone all the nested objects contained in the orderForm object
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

        // set the updatedFormElement value and set this equal to event target value
        // set the updatedOrderForm set it equal to the updatedFormElement.
        updatedFormElement.value = event.target.value;

        // checks the validity of the form input and updates the valid property of the form element
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );

        // updates the touched property to apply the Invalid css style only if the form input was touched
        updatedFormElement.touched = true;

        // updates the correct form element with the updated form element
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        // call this.setState and set order form to updated order form.
        this.setState({ orderForm: updatedOrderForm });
    };

    // checks the validity of the form inputs
    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

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
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        valueType={formElement.config.elementConfig.valueType}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) =>
                            this.inputChangedHandler(event, formElement.id)
                        }
                    />
                ))}

                <Button btnType="Success">Order</Button>
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
