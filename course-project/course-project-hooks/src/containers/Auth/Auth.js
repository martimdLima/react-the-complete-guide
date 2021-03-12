import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./Auth.module.css";

import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";

import { updateObject, checkValidity } from "../../shared/utility";

export const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                valuetype: "email address",
                placeholder: "Email",
            },
            value: "",
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
        },
        password: {
            elementType: "input",
            elementConfig: {
                type: "password",
                valuetype: "password",
                placeholder: "Password",
            },
            value: "",
            validation: {
                required: true,
                minLength: 6,
                maxLength: 20,
            },
            valid: false,
            touched: false,
        },
    });

    const [isSignup, setIsSignUp] = useState(false);

    const {building, authRedirectPath, onSetAuthRedirectPath} = props;

    useEffect(() => {
        if (!building && authRedirectPath !== "/") {
            onSetAuthRedirectPath();
        }
    }, [building, authRedirectPath, onSetAuthRedirectPath]);

    // the inputChangedHandler is responbile for updating the input fields with the user input
    // it will get an event object as it will automatically be passed by react if this method is attached to an event listener which it is.
    const inputChangedHandler = (event, controlName) => {
        // create a shallow clone of the orderForm object

        const updatedControls = updateObject(authForm, {
            [controlName]: updateObject(authForm[controlName], {
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    authForm[controlName].validation
                ),
                touched: true,
            }),
        });

        setAuthForm(updatedControls);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value, isSignup);
    };

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignup);
    };

    // create and initialize the form elements array
    const formElementsArray = [];

    // loop through all the keys in the form elements array
    for (let key in authForm) {
        // retrieve each form elements config
        let formElemConfig = authForm[key];

        // push a new object into the array with the id and config of the form element
        formElementsArray.push({
            id: key,
            config: formElemConfig,
        });
    }

    let form;

    if (props.loading) {
        form = <Spinner />;
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = <p>{props.error.message}</p>;
    }

    form = formElementsArray.map((formElement) => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valuetype={formElement.config.elementConfig.valuetype}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
        />
    ));

    let authRedirect = false;

    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />;
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success">Submit</Button>
            </form>
            <Button btnType="Danger" clicked={switchAuthModeHandler}>
                Switch to {isSignup ? "Login" : "Sign Up"}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.tokenId !== null,
        building: state.burguerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignup) =>
            dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
