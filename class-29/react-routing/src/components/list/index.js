import React from 'react';
import ListItem from './list-item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    //when the component is mounted to the dom
    fetch('https://digimon-api.herokuapp.com/api/digimon')
      .then((raw) => raw.json())
      .then((results) => {
        const modifiedResult = results.slice(0, 20);
        console.log(modifiedResult);
        this.setState({ results: modifiedResult });
      });
  }
  /*
  componentWillMount() {
    // before the component is mounted
  }
  shouldComponentUpdate() {
    // return True or false to stop updating
  }
  componentWillUpdate() {
    // if you want to do anything when the component update
  }
  componentWillUnmount() {
    //remove events
  }
  */
  render() {
    return (
      <>
        <ul>
          {this.state.results.map((data) => {
            return <ListItem key={data.name} data={data} />;
          })}
        </ul>
      </>
    );
  }
}
export default List;
