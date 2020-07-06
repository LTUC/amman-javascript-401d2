import React from 'react';

import useFormInput from '../../hooks/form-input';

function Food(props) {
  const nameInput = useFormInput('Enter Food');
  const caloriesInput = useFormInput('Enter Calories');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameInput.value, caloriesInput.value);
  }
  return (
    <section>
      <h2>Hooks v2 Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" {...nameInput} />
        <input type="text" {...caloriesInput} />
        <button>Add Food</button>
      </form>
      <p>my food? {nameInput.value}</p>
      <p>my calories? {caloriesInput.value}</p>
    </section>
  );
}

export default Food;
