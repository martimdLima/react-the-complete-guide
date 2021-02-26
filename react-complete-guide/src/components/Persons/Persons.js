import React, { Component, PureComponent } from "react";

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

//React.PureComponent is similar to React.Component.
// The difference between them is that React.Component doesn’t implement shouldComponentUpdate(),
// but React.PureComponent implements it with a shallow prop and state comparison.
class Persons extends PureComponent {
    // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate");

    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     }
    // }

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
