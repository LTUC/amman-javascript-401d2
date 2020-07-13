import React from 'react';
import Status from './components/status';
import VoteCounter from './components/vote-counter';
import './style.css';
function App() {
  return (
    <>
      <VoteCounter />
      <Status />
    </>
  );
}

export default App;
