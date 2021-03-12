import React, { useEffect } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show
                        ? "translateY(0)"
                        : "translateY(-100vh)",
                    opacity: props.show ? "1" : "0",
                }}>
                {props.children}
            </div>
        </Aux>
    );
};

export default React.memo(
    Modal,
    (prevProps, nextProps) =>
        prevProps.show === nextProps.show &&
        prevProps.children === nextProps.children
);
/* class Modal extends Component {
    // this could be a funcional component
    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
        );
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
 */
