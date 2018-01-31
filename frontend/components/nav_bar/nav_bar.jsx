import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className='navbar-links'>
        <p>Hello, { this.props.currentUser.username }</p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div className='navbar-links'>
        <Link to='/'>Become a Host</Link>
        <Link to='/'>Help</Link>
        <Link className='signup' to='/signup'>Sign Up</Link>
        <Link className='login' to='/login'>Log In</Link>
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
