import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.scss';
function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
