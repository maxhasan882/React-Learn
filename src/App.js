import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manue", age: 29 },
      { name: "Stephen", age: 26 }
    ]
  };

  switchNameHandler = newName => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Manue", age: 29 },
        { name: "Stephen", age: 23 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Maxhasan")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxxx!")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
