import React, { Component } from "react";
import {connect} from "react-redux"
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurguerBuilder from "./containers/BurguerBuilder/BurguerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index"

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/auth" component={Auth} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/" component={BurguerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckSate())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
