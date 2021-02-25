import React, { Component } from "react";

import Person from "./Person/Person";

// const persons = (props) => {
//   // this components will be rendered after the render method is run
//   console.log("[Persons.js] rendering");

//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         key={person.id}
//         name={person.name}
//         age={person.age}
//         changed={(event) => props.changed(event, person.id)}
//       />
//     );
//   });
// };

// export default persons;

class Persons extends Component {
    // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. 
    shouldComponentUpdate(nextProps, nextState) {
        "[Persons.js] shouldComponentUpdate";
        return true;
    }

    // getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM.
    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: "Test Snapshot" };
    }

    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    componentWillUnmount() {
        console.log("[Persons.js] componentWillunmount");
    }

    render() {
        // this components will be rendered after the render method is run
        console.log("[Persons.js] rendering");

        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons;
