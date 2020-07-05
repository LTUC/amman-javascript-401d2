import React, { useEffect, useState } from 'react';

function Effects(props) {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const addPerson = (e) => {
    e.preventDefault();
    e.target.reset();
    // people = ['mahmoud','ahmad']
    // [...people,'hammad'] => ['mahmoud','ahmad','hammad']
    //if we have name then do the other statement otherwise skip
    // we need to add to our people array and we cant add to array we need to have a copy
    name && setPeople([...people, name]);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  // this runs on Component Did mount and Component Will update (every re-render) of this component
  useEffect(() => {
    console.log('I Run on every RE-Render');
  });
  // if we pass array of the states that we want to watch it will only run when that is changed
  // this will only run when the name state is changed (every onChange + init)
  useEffect(() => {
    console.log('Name Changed to', name);
  }, [name]);
  // this will only run when the people state is changed (every submit + init)
  useEffect(() => {
    console.log('Name Added to ', people);
  }, [people]);

  // this will only run one time (componentDidMount())
  useEffect(() => {
    console.log('DID MOUNT');
  }, []);
  // component will unmount
  useEffect(() => {
    //effect
    console.log('hi');
    return () => {
      //cleanup
      alert('hi');
      // remove event listners + do api calls if needed
      console.log('component will unmount');
    };
  }, []);
  return (
    <>
      <form onSubmit={addPerson}>
        <input type="text" onChange={changeName} />
      </form>
      {people.map((person) => {
        return <p key={person}>{person}</p>;
      })}
    </>
  );
}

export default Effects;
