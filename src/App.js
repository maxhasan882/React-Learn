import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "afaf", name: "Max", age: 28 },
      { id: "vxcv", name: "Manue", age: 29 },
      { id: "yiyui", name: "Stephen", age: 26 }
    ],
    showPerson: false
  };

  togglePersonHandler = () => {
    const doseShow = this.state.showPerson;
    this.setState({ showPerson: !doseShow });
  };
  deletePerosonHandler = personIndex => {
    // const persons = this.state.persons; /// copy reference thats why it will change in the all application
    // const persons = this.state.persons.slice(); /// alternative salution Or
    const persons = [...this.state.persons]; /// ES6 sprade operator
    console.log(personIndex);
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log("Id is: ", id, " and indexis: ", personIndex);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerosonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangehandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
