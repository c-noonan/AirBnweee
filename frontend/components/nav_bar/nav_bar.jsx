import React from 'react';
import Modal from 'react-modal';
import style from '../session/modal_style.js';
import { Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
    this.props.clearErrors();
  }

  openModal(bool){
    if (bool === true ) {
      this.setState({ modalOpen: true });
      this.whichClass = 'signup';
      this.formType = <SignupContainer onClose={() => this.closeModal()} />;
    } else {
      this.setState({ modalOpen: true });
      this.whichClass = 'login';
      this.formType = <LoginContainer onClose={() => this.closeModal()}/>;
    }
  }

  render() {
    const theModal =
        <Modal className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="Modal"
          >
          <div className={this.whichClass}>
            {this.formType}
          </div>
        </Modal>;

    const display = this.props.currentUser ? (
      <div className='navbar-links'>
        <p>Hello, { this.props.currentUser.username }</p>
        <Link to='/' onClick={this.props.logout}>Logout</Link>
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
            <img id='logo' src='https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg'/>
          </Link>
        </span>
        {display}
        {theModal}
      </div>
    );
  }
}


export default NavBar;
