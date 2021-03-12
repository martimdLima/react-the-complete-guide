import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import ContactData from "./contactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

import * as actions from "../../store/actions/index";

const Checkout = (props) => {
    const checkoutCancelHandler = () => {
        props.history.goBack();
    };

    const checkoutContinueHandler = () => {
        props.history.replace("/checkout/contact-data");
    };

    let summary = <Redirect to="/" />;

    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;

        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={props.ings}
                    checkoutCancelled={checkoutCancelHandler}
                    checkoutContinued={checkoutContinueHandler}
                />
                <Route
                    path={props.match.path + "/contact-data"}
                    component={ContactData}
                />
            </div>
        );
    }

    return summary;
};

const mapStateToProps = (state) => {
    return {
        ings: state.burguerBuilder.ingredients,
        purchased: state.order.purchased,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
