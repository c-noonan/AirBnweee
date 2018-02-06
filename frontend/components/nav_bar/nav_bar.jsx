import React from 'react';
import Modal from 'react-modal';
import style from '../session/modal_style.js';
import { Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: null,
      whichClass: null
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
    this.props.clearErrors();
  }

  openModal(bool){
    if (bool === true ) {
      this.setState({ modalOpen: true,
        whichClass: 'signup',
        formType: <SignupContainer
        onClose={() => this.closeModal()}
        onSwitch={() => this.openModal(!bool)}
      />}, this.props.clearErrors);
    } else {
      this.setState({ modalOpen: true,
      whichClass: 'login',
      formType: <LoginContainer
        onClose={() => this.closeModal()}
        onSwitch={() => this.openModal(!bool)}
        /> }, this.props.clearErrors);
    }
  }

  render() {
    const theModal =
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="Modal"
          >
          <div className={this.state.whichClass}>
            {this.state.formType}
          </div>
        </Modal>;

    const display = this.props.currentUser ? (
      <div className='navbar-links'>
        <p>Hello, { this.props.currentUser.username }</p>
        <Link to='/' onClick={() => {this.props.logout(); this.props.clearErrors();}}>Logout</Link>
      </div>
    ) : (
      <div className='navbar-links'>
        <Link to='/'>Become a Host</Link>
        <Link to='/'>Help</Link>
        <button id='session' onClick={() => this.openModal(true)}>Sign Up</button>
        <button id='session' onClick={() => this.openModal(false)}>Log In</button>
      </div>
    );

    return (
      <div className='navbar'>
        <span>
          <Link to='/'>
            <img id='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOchZVtVc4mzEfOS7jg43BPZQVeGc7Ea6rqaP8bSdwKg_oDS60'/>
          </Link>
        </span>
        {display}
        {theModal}
      </div>
    );
  }
}


export default NavBar;
