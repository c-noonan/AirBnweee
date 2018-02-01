import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import Session from '../session/session';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className='navbar-links'>
        <p>Hello, { this.props.currentUser.username }</p>
        <Link to='/' onClick={this.props.logout}>Logout</Link>
      </div>
    ) : (
      <div className='navbar-links'>
        <Link to='/'>Become a Host</Link>
        <Link to='/'>Help</Link>
        <Link to='/'>Sign Up</Link>
        <Link to='/'>Log In</Link>
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
      </div>
    );
  }

}

export default NavBar;
