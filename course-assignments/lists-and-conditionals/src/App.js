import React, { Component, useState } from "react";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  // initially the user input is an empty string
  state = {
    userInput: "",
  };

  // the inputChanged handler will handle all changes to the user input and update it whenever it occurs
  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    // the charList is obtained by splitting the userInput, retrieving each individual character and then create a Char component for each one
    const charList = this.state.userInput.split("").map((char) => {
      return <Char character={char} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation userInputLenght={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
