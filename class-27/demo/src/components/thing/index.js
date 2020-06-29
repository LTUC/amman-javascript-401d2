import React from 'react';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stuff: true };
  }
  handleClick = (e) => {
    this.setState({ stuff: !this.state.stuff });
  };
  render() {
    return (
      <section>
        <p id="me">Current Val: {this.state.stuff.toString()}</p>
        <aside>
          <h2>hi</h2>
        </aside>
        <button onClick={this.handleClick}>Change</button>
      </section>
    );
  }
}

export default Thing;
