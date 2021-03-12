import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";
import BurguerBuilder from "./containers/BurguerBuilder/BurguerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

// <Suspense> component that lets you “wait” for some code to load and declaratively specify a loading state
// (like a spinner) while we’re waiting.
// Suspense for Data Fetching is a new feature that lets you also use <Suspense>
// to declaratively “wait” for anything else, including data.
const Checkout = React.lazy(() => {
    return import("./containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
    return import("./containers/Orders/Orders");
});

const Auth = React.lazy(() => {
    return import("./containers/Auth/Auth");
});

const App = (props) => {
    useEffect(() => {
        props.onTryAutoSignup();
    }, [props]);

    let routes = (
        <Switch>
            <Route path="/auth" render={(props) => <Auth {...props}/>} />
            <Route path="/" exact component={<BurguerBuilder />} />
            <Redirect to="/" />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" render={(props) => <Checkout {...props}/>} />
                <Route path="/orders" render={(props) => <Orders {...props}/>} />
                <Route path="/logout" component={Logout} />
                <Route path="/auth" render={(props) => <Auth {...props}/>} />
                <Route path="/" exact component={BurguerBuilder} />
                <Redirect to="/" />
            </Switch>
        );
    }

    return (
        <div>
            <Suspense fallback={<Spinner />}>
                <Layout>{routes}</Layout>
            </Suspense>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckSate()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
