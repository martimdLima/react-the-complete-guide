import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Navigation/Logo/Logo";

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
