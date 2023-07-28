import React from "react";
import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
}

export default List;
