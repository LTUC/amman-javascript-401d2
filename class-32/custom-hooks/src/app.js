import React from 'react';
import FoodClass from './components/food/food-with-class';
import FoodFunction from './components/food/food-with-function';
import FoodHooks from './components/food/food-with-hooks';
import FoodHooksV2 from './components/food/food-with-hooks-v2';
function App() {
  return (
    <>
      <FoodClass />
      <FoodFunction />
      <FoodHooks />
      <FoodHooksV2 />
    </>
  );
}

export default App;
