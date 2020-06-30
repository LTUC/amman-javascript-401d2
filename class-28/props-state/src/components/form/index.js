import React from 'react';

function Form(props) {
  const handleSubmit = async (e) => {
    //at some point
    e.preventDefault();
    // axios,superagent,fetch,$.ajax,.........
    // fetch('https://swapi.dev/api/people/')
    //   .then((raw) => return raw.json())
    //   .then((data) => {
    //     console.log(data);
    //   }).catch(e=>console.log);
    try {
      const raw = await fetch('https://swapi.dev/api/people/');
      const data = await raw.json();
      // console.log(data.results);
      // reduce((acc,cur)=>{},initValue)
      const results = data.results.reduce((list, person) => {
        list.push({ name: person.name, url: person.url });
        return list;
      }, []);
      // we want to send the results up to the App component
      props.handler(results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>{props.prompt}</button>
    </form>
  );
}

export default Form;
