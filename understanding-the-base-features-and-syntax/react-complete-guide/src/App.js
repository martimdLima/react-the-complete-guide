import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A React App</h1>
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
