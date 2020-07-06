import React from 'react';

import useForm from '../../hooks/form';

function Food(props) {
  const [values, handleChange, handleSubmit] = useForm(handleForm);
  function handleForm(value) {
    console.log(value);
  }
  return (
    <section>
      <h2>Hooks Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="food"
          onChange={handleChange}
          placeholder="add Food"
        />
        <input
          type="text"
          name="calories"
          onChange={handleChange}
          placeholder="add calories"
        />
        <button>Add Food</button>
      </form>
      <p>my food? {values.food}</p>
      <p>my calories? {values.calories}</p>
    </section>
  );
}

export default Food;
