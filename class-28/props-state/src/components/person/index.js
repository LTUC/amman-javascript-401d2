import React from 'react';

function Person(props) {
  return (
    <li onClick={() => props.handler(props.person)}>
      {props.person.name}
      {/* <a href={props.person.url} >
        {props.person.name}
      </a> */}
    </li>
  );
}

export default Person;
