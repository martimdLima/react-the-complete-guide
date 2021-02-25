import React, { Component, Fragment } from "react";

import Aux from "../../../hoc/Aux";

import classes from "./Person.css";

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
    render() {
        console.log("[Person.js] rendering");

        return (
            <Aux>
                {/*      <div className={classes.Person}></div> */}
                <p onClick={this.props.click}>
                    This is {this.props.name} and it's {this.props.age} old!
                </p>
                <p>{this.props.children}</p>
                {/* two way binding */}
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                {/* </div> */}
            </Aux>
        );
    }
}

export default Person;
