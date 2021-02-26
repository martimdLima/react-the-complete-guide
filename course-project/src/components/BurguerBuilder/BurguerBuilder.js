import React, { Component } from "react";

import BuildControls from "../Burguer/BuildControls/BuildControls";
import Burguer from "../Burguer/Burguer";

import Aux from "../../hoc/Aux";

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {
    /*     constructor(props) {
        super(props);
        this.state = {...}
    } */

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    };

    render() {
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurguerBuilder;
