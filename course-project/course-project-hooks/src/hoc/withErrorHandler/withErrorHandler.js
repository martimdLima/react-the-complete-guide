import React from "react";

import useHttpErrorHandler from "../../hooks/http-error-handler";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const WithErrorHandler = (WrappedComponent, axios) => {
    
    const ErrorWrapper = (props) => {
        const [error, errorHandler] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal show={error} modalClosed={errorHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    };

    return ErrorWrapper;
};

export default WithErrorHandler;
