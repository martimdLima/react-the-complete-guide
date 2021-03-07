import React, { Component } from "react";

import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./Auth.module.css";

import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";

export class Auth extends Component {
    state = {
        controls: {
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
        },
        isSignup: true,
    };

    componentDidMount() {
        if (!this.props.building && this.props.authRedirectPath !== "/") {
            this.props.onSetAuthRedirectPath();
        }
    }

    // the inputChangedHandler is responbile for updating the input fields with the user input
    // it will get an event object as it will automatically be passed by react if this method is attached to an event listener which it is.
    inputChangedHandler = (event, controlName) => {
        // create a shallow clone of the orderForm object
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(
                    event.target.value,
                    this.state.controls[controlName].validation
                ),
                touched: true,
            },
        };

        this.setState({ controls: updatedControls });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignup
        );
    };

    switchAuthModeHandler = () => {
        this.setState((prevState) => {
            return {
                isSignup: !prevState.isSignup,
            };
        });
    };

    logoutHandler = () => {};

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

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    render() {
        // create and initialize the form elements array
        const formElementsArray = [];

        // loop through all the keys in the form elements array
        for (let key in this.state.controls) {
            // retrieve each form elements config
            let formElemConfig = this.state.controls[key];

            // push a new object into the array with the id and config of the form element
            formElementsArray.push({
                id: key,
                config: formElemConfig,
            });
        }

        let form;

        if (this.props.loading) {
            form = <Spinner />;
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
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
                changed={(event) =>
                    this.inputChangedHandler(event, formElement.id)
                }
            />
        ));

        let authRedirect = false;

        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">Submit</Button>
                </form>
                <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
                    Switch to {this.state.isSignup ? "Login" : "Sign Up"}
                </Button>
            </div>
        );
    }
}

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
