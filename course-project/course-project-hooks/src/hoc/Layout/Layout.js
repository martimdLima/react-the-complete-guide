import React, { useState } from "react";

import { connect } from "react-redux";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Aux from "../Aux/Aux";

import classes from "./Layout.module.css";

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggle={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={sideDrawerClosedHandler}
            />
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.tokenId !== null,
    };
};

export default connect(mapStateToProps, null)(Layout);
