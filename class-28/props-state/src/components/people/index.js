import React from 'react';
import Person from '../person';

function People(props) {
  return (
    <>
      <ul>
        {props.people.map((person) => {
          return (
            <Person person={person} key={person.name} handler={props.handler} />
          );
        })}
      </ul>
    </>
  );
}

export default People;
