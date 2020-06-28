import React from 'react';
// step 1 npm i node-sass
// step 2 create .scss file
// step 3 import it
import './App.scss';
//stateless  / functional / dummy  Component
const Header = () => {
  return (
    <header>
      <h1>Words App</h1>
    </header>
  );
};
// stateful / class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: 'nothing to see here' };
  }
  handleChange = (e) => {
    const words = e.target.value;
    // you are NOT ALLOWED TO CHANGE THE STATE DIRECTLY
    // this.state.words = '';
    // this.setState = update the state + fire the render method
    console.log(e.target.value);
    this.setState({ words });
  };
  handleClick = (e) => {
    const words = this.state.words.split('').reverse().join('');
    this.setState({ words });
  };

  render() {
    return (
      <main className="main">
        <h3>{this.state.words}</h3>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click</button>
      </main>
    );
  }
}
// Functional Component / dummy component
// App component
function App() {
  // what is this
  //JSX
  // class, value,for ==> className,htmlValue,htmlFor
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
