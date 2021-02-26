import React, { Component } from "react";

import Burguer from "../Burguer/Burguer";

import Aux from "../../hoc/Aux";

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burguer/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;
