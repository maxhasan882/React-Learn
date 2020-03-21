import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Superman"
  };
  userNameHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create Two new component: UserInpput and Useroutput</li>
          <li>
            UserInput should hold an input element, UserOutput two element
          </li>
          <li>Output multiple UserOutput components in the App component</li>
        </ol>
        <UserInput
          changed={this.userNameHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max Hasan" />
      </div>
    );
  }
}

export default App;
