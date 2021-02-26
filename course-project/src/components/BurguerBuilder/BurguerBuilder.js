import React, { Component } from "react";

import Burguer from "../Burguer/Burguer";

import Aux from "../../hoc/Aux";

// This component is responsible for the Burger and Build Controls Components that enables the user to build a burguer
class BurguerBuilder extends Component {

/*     constructor(props) {
        super(props);
        this.state = {...}
    } */

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }


    render() {
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;
