import React, { Component, useState } from "react";
import Person from "./Person/Person";

import "./App.css";

// Class for example, which we would use in normal html to assign a css class can't be used because it's a reserved word in javascript,
// used to create a new class. This is why class name must be used.

class App extends Component {
  // The jsx expression must always have a parent element.

  // state is managed within the component (similar to variables declared within a function)

  // If state changes or props changes, it basically analyzes the code it already rendered to the DOM and the code it would now render if it
  // were to re-render everything and then it updates the existing DOM in all the places where it needs to update it to reflect your new state
  // and props. New state in app.js, new props in person.js.

  state = {
    persons: [
      { name: "John", age: 24 },
      { name: "Doe", age: 35 },
      { name: "Poe", age: 17 },
    ],
    otherState: "some value",
    showePersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
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

  // two way binding
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Lisbon", age: 23 },
        { name: event.target.value, age: 34 },
        { name: "Tokyo", age: 19 },
      ],
      otherState: "some value",
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    // handling dynamic content
    // if showPersons is true, then set the persons variable to the Persons components
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Outputting Lists */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>A React App</h1>
        <button style={style} onClick={this.tooglePersonHandler}>
          Toogle Persons
        </button>

        {/* By using a ternary expression, we can show the div based on the state of the showePersons property 
          this.state.showPersons ? <div> ... </div> : null */}
        {persons}
      </div>
    );
  }
}

export default App;
