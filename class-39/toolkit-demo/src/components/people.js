import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { add, remove, get } from '../store/slice';
// FOR ME DO props.get()
const People = (props) => {
  useEffect(() => {
    props.get();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(e.target.name.value);
  };
  return (
    <section>
      <ul>
        {props.people.map((person) => {
          return (
            <li key={person.name} onClick={() => props.remove(person.name)}>
              {person.name}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter new name" />
        <button>Add</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log('HIII', state);
  return { people: state.people };
};

const mapDispatchToProps = { add, remove, get };

export default connect(mapStateToProps, mapDispatchToProps)(People);
