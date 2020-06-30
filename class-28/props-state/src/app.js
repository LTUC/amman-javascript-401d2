import React from 'react';
import Form from './components/form';
import People from './components/people';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }
  handleForm = (results) => {
    // this will be called from the Form component on Submit
    console.log('hi from app', results);
    this.setState({ people: results });
  };
  handleDelete = (deletedPerson) => {
    console.log(deletedPerson.name);
    const filterd = this.state.people.filter((person) => {
      return person.name !== deletedPerson.name;
    });
    this.setState({ people: filterd });
  };
  render() {
    return (
      <>
        <People people={this.state.people} handler={this.handleDelete} />
        <Form prompt="Get Star Wars people" handler={this.handleForm} />
      </>
    );
  }
}

export default App;
