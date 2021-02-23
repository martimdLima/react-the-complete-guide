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
  };

  // it's a good pratice to name all event handlers with the word "handler" to expliclitly mention its purpose
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Madrid", age: 34 },
        { name: "Tokyo", age: 19 },
      ],
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
    });
  };

  render() {
    return (
      <div className="App">
        <h1>A React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Lisbon")}>
          Switch Name
        </button>
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
          click={() => this.switchNameHandler("London")}
          changed={this.nameChangeHandler}
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

// Using the useState() Hook for State Manipulation
// const app = (props) => {

//   // useState is the most important React hook. It allows us to manage state in a functiona component.

//   // useState is used by calling it like a function and passing the inital state.
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       { name: "John", age: 24 },
//       { name: "Doe", age: 35 },
//       { name: "Poe", age: 17 },
//     ]
//   });

//   const [otherState, setOtherState] = useState({otherState: "some other value"});

//   console.log(personsState, otherState);

//     const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Texas", age: 23 },
//         { name: "Madrid", age: 34 },
//         { name: "Tokyo", age: 19 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>A React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {/* <Person name="John" age="24"/> */}
//       {/* <Person name="Doe" age="53">My Hobbies are: Cinema</Person>
//         <Person name="Poe" age="16"/> */}
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My Hobbies are: Cinema
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default app;
