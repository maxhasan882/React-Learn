import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manue", age: 29 },
      { name: "Stephen", age: 26 }
    ],
    otherState: "This is other state"
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maxhasan", age: 25 },
        { name: "Manue", age: 29 },
        { name: "Stephen", age: 23 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
