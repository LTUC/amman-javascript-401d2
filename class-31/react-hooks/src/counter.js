import React, { useState } from 'react';
function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [isEven, setIsEven] = useState(false);
  const handleClick = () => {
    // clicks++;
    const newCount = clicks + 1;
    setClicks(newCount);
    setIsEven(newCount % 2 === 0);
  };
  return (
    <>
      <h2>Button has clicked {clicks} time(s)</h2>
      <h3>Even? {isEven.toString()}</h3>
      <button onClick={handleClick}>Update Clicks</button>
    </>
  );
}

export default Counter;
