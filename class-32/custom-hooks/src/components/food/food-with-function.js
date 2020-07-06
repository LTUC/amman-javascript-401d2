import React, { useState } from 'react';

function Food(props) {
  const [values, setValues] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <h2>Function Component</h2>
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
