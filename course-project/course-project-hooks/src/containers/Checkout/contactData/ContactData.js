import React, { Component, useState } from "react";
import { connect } from "react-redux";

import axios from "../../../axios-orders";

import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";

import classes from "./contactData.module.css";

import { updateObject, checkValidity } from "../../../shared/utility";

import * as actions from "../../../store/actions/order";

const ContactData = (props) => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                valuetype: "name",
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
                valuetype: "street",
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
                valuetype: "zipcode",
                placeholder: "Your ZipCode",
            },
            value: "",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 8,
                isNumeric: true,
            },
            valid: false,
            touched: false,
        },
        country: {
            elementType: "input",
            elementConfig: {
                type: "text",
                valuetype: "country",
                placeholder: "Your Country",
            },
            value: "",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 10,
            },
            valid: false,
            touched: false,
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "text",
                valuetype: "email address",
                placeholder: "Your Email",
            },
            value: "",
            validation: {
                required: true,
                isEmail: true,
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
            value: "cheapest",
            validation: {
                required: false,
            },
            valid: true,
            touched: false,
        },
    });

    let [formIsValid, setFormIsValid] = useState(false);

    // the orderHandler is responsible for the orders submission
    const orderHandler = (event) => {
        event.preventDefault();

        // extract the data that we want to submit.
        // All the data is already managed in this state, in our form object here,
        //which value is updated all the time with two way binding.
        const formData = {};

        for (let formElementIdentifier in orderForm) {
            // set formData for a given form element identifier equal to this.state.orderForm
            // for the form element identifier and there access the value
            formData[formElementIdentifier] =
                orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: props.ings,
            price: props.totalPrice,
            orderData: formData,
            userId: props.userId,
        };
        props.onOrderBurguer(order, props.token);
    };

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                orderForm[inputIdentifier].validation
            ),
            touched: true,
        });

        // updates the correct form element with the updated form element
        const updatedOrderForm = updateObject(orderForm, {
            [inputIdentifier]: updatedFormElement,
        });

        // if the valid property in the input is true and the form is valid enable the button, otherwise it stays disabled
        formIsValid = true;

        for (let inputId in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputId].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    };

    // create and initialize the form elements array
    const formElementsArray = [];

    // loop through all the keys in the form elements array
    for (let key in orderForm) {
        // retrieve each form elements config
        let formElemConfig = orderForm[key];

        // push a new object into the array with the id and config of the form element
        formElementsArray.push({
            id: key,
            config: formElemConfig,
        });
    }

    console.log(formIsValid);

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map((formElement) => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    valuetype={formElement.config.elementConfig.valuetype}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) =>
                        inputChangedHandler(event, formElement.id)
                    }
                />
            ))}

            <Button btnType="Success" disabled={!formIsValid}>
                Order
            </Button>
        </form>
    );

    if (props.loading) {
        form = <Spinner />;
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your contact Data</h4>
            {form}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ings: state.burguerBuilder.ingredients,
        totalPrice: state.burguerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderBurguer: (orderData, token) =>
            dispatch(actions.purchaseBurguer(orderData, token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(ContactData, axios));
