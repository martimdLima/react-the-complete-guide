import React from "react";

import Person from "./Person/Person";

const persons = (props) => {
  // this components will be rendered after the render method is run
  console.log("[Persons.js] rendering");

  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};
    

/* const persons = props => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
      return (
        <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => props.changed(event, person.id)}
        />
      );
    });
  };
 */



export default persons;
