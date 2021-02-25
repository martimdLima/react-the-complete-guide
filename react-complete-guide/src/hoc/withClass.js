import React from "react";

// sets up a class on a div that wraps this component.
const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent></WrappedComponent>
        </div>
    );
};

export default withClass;
