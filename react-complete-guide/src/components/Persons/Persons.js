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
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        "[Persons.js] shouldComponentUpdate";
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: "Test Snapshot" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
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
