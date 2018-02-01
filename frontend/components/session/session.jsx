import React from 'react';
import Modal from 'react-modal';
import style from './modal_style.js';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';

class Session extends React.Component {

  constructor(props){
    super(props);
    this.state = { modalOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  render(){
    return(
      <div>
        <button onClick={this.openModal}>open modal!</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="Modal"
          >
          <div className='login'>
            <SignupContainer />
          </div>
        </Modal>
      </div>
    );
  }

}

export default Session;
