import React from "react";

import Aux from "../../hoc/Aux";

import classes from "./Layout.module.css";

// The Layout component is responsible for the layout of the app
const Layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
