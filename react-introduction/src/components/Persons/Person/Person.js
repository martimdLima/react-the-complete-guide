import React, { Component, Fragment } from "react";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";
import { func, number, string } from "prop-types";

// in its simplest form, a component is a function returning some jsx.

// props (short for “properties”) and state are both plain JavaScript objects.
// While both hold information that influences the output of render,
// they are different in one important way:
// props get passed to the component (similar to function parameters)
// whereas state is managed within the component (similar to variables declared within a function).

// const person = (props) => {

//   console.log("[Person.js] rendering");

//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         This is {props.name} and it's {props.age} old!
//       </p>
//       <p>{props.children}</p>
//       {/* two way binding */}
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    // since componentDidMount executes after the render method, inputElement will be set by now,
    // and we can focus only the last paragraph rendered
    // using refs - createRef method
    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log("[Person.js] rendering");

        return (
            <Aux>
                {/*               <AuthContext.Consumer>
                {(context) => context.authenticated ? (
                    <p>Authenticated</p>
                ) : (
                    <p>Please log in</p>
                )}
              </AuthContext.Consumer> */}
                {this.context.authenticated ? (
                    <p>Authenticated</p>
                ) : (
                    <p>Please log in</p>
                )}
                <p onClick={this.props.click}>
                    This is {this.props.name} and it's {this.props.age} old!
                </p>
                <p>{this.props.children}</p>
                <input
                    /* using refs - function form method */
                    /* ref={(inputEle) => {this.inputElement = inputEle;}} */
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

// using propTypes
Person.propTypes = {
    click: func,
    name: string,
    age: number,
    changed: func,
};

export default withClass(Person, classes.Person);
