import React from 'react';
import { If, Then, Else } from '../if';
import Modal from '../modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <section>
        <If condition={this.state.open}>
          <Then>
            <Modal title="PoP Up" close={this.toggleModal}>
              <div>this is the modal!</div>
              <p>akdnlksndlkasndklasnd</p>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Open Modal</button>
          </Else>
        </If>
      </section>
    );
  }
}

export default Home;
