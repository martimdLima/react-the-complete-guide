import React from "react";

import Ingredient from "../Burguer/Ingredient/Ingredient";

import classes from "./Burguer.module.css"

const burguer = (props) => {

    return(
        <div className={classes.Burguer}>
            <Ingredient type="bread-top"/>
            <Ingredient type="cheese"/>
            <Ingredient type="meat"/>
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burguer;