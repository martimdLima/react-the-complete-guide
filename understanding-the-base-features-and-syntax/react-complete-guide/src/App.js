import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  // Class for example, which we would use in normal html to assign a css class can't be used because it's a reserved word in javascript,
  // used to create a new class. This is why class name must be used.

  // The jsx expression must always have a parent element.

  // state is managed within the component (similar to variables declared within a function)
  state = {
    persons: [
      { name: "John", age: 24 },
      { name: "Doe", age: 35 },
      { name: "Poe", age: 17 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>A React App</h1>
        <button>Switch Name</button>
        {/* <Person name="John" age="24"/> */}
        {/* <Person name="Doe" age="53">My Hobbies are: Cinema</Person>
        <Person name="Poe" age="16"/> */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies are: Cinema
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }

  // this method is responsible for compiling the psuedo-html in the render method
  // it takes at least 3 arguments, but can take an infinite number of arguments.
  // the first element choosen to be rendered
  // the second element is responsible for the configuraiton of the element
  // the third element is the amount of children, the elements nested in this element
  //return .createElement('div', null, 'h1', 'Hi, Test React App!!!');

  // render() {
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", {className: 'App'}, "Hi, This is a test React App!!!")
  //   );
  // }
}

export default App;
