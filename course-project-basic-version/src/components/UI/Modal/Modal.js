import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

/* const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0",
            }}>
            {props.children}
        </div>
    </Aux>
);

export default React.memo(modal); */

class Modal extends Component {
    // this could be a funcional component
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log("[Modal] will update");
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0",
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
