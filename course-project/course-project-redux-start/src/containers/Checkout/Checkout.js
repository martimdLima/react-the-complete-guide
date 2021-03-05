import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ContactData from "./contactData/contactData";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    /* 
    state = {
        ingredients: {},
        price: 0,
    };

   componentDidMount() {
        this.checkoutDataHandler();
    }
    
    checkoutDataHandler = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        
        for (let param of query.entries()) {

            if(param[0] === "price") {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }

            
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    } */

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                />
                <Route
                    path={this.props.match.path + "/contact-data"}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
    };
};

export default connect(mapStateToProps)(Checkout);
