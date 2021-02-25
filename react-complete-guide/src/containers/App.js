import React, { Component } from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

import classes from "./App.css";

class App extends Component {
    // The jsx expression must always have a parent element.

    // state is managed within the component (similar to variables declared within a function)

    // If state changes or props changes, it basically analyzes the code it already rendered to the DOM and the code it would now render if it
    // were to re-render everything and then it updates the existing DOM in all the places where it needs to update it to reflect your new state
    // and props. New state in app.js, new props in person.js.

    constructor(props) {
        super(props);
        console.log("[App.js].constructor");
    }

    state = {
        persons: [
            { id: "aa24f", name: "John", age: 24 },
            { id: "aa22r", name: "Doe", age: 35 },
            { id: "aa26c", name: "Poe", age: 17 },
        ],
        otherState: "some value",
        showPersons: false,
    };

    // getDerivedState runs after the constructor
    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    // render will execute, persons component will render the individual person components in the persons component
    // and once all of that is done, componentDidMount will run
    componentDidMount() {
        console.log("[App.js] ComponentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("[App.js] ComponentDidUpdate");
    }

    // The flaw of this approach is that in javascript, objects and arrays are reference types,
    // so when I get persons from my state as I do here I actually get a pointer to the original person's object
    // managed by react, to the original state I should say. If I then splice it here, I already mutate this original data
    // and whilst it does work without throwing an error, this is not really how you should do it, this can lead to unpredictable apps
    // and is definitely a bad practice. A good practice is to create a copy of your persons array before manipulating it and a simple way
    // of doing this is by calling the slice method. Slice without arguments simply copies the full array and returns a new one
    // which is then stored here. And you can now safely edit this new one and then update to react state with your new array.
    // An alternative to this approach would be to use it a ES6 feature, the spread operator. You can simply
    // set persons equal to a new array and this new array can now use the spread operator which are three dots

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    // it's a good pratice to name all event handlers with the word "handler" to expliclitly mention its purpose
    // rendering content conditionally
    // this method will show/hide names ba
    tooglePersonHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow,
        });
    };

    // Flexible Lists
    nameChangedHandler = (event, id) => {
        // gets the person index from the persons array, if the choosen person's id is equal to any id in the array
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        // gets the person from the persons array, by creating a copy of it with the spread operator
        const person = {
            ...this.state.persons[personIndex],
        };

        // updates the name of the person based on the event target value.
        // Each input in the input field, updates the name.
        person.name = event.target.value;

        // gets the persons array by creating a copy of it with the spread operator
        const persons = [...this.state.persons];

        // updates the persons array in the position of the person index to the update person
        persons[personIndex] = person;

        // finally sets the state with the new persons array
        this.setState({
            persons: persons,
            otherState: "some value",
        });
    };

    render() {
        // after the getDerivedState method runs, the render method will run
        console.log("[App.js] render");

        // handling dynamic content
        // if showPersons is true, then set the persons variable to the Persons components
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    onClick={this.tooglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
