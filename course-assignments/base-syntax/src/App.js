import React, { Component, useState } from "react";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import "./App.css";

class App extends Component {
  state = {
    users: [
      { username: "John" },
      { username: "Doe" },
      { username: "Poe" },
      { username: "Toe" },
    ],
  };

  usernameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: "Doe" },
        { username: "Poe" },
        { username: "Toe" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.users[0].username}
        />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
        <UserOutput username={this.state.users[3].username} />
      </div>
    );
  }
}

export default App;
