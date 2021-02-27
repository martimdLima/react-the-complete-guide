import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Aux from "../../hoc/Aux";

import classes from "./Layout.module.css";

// The Layout component is responsible for the layout of the app
const Layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
