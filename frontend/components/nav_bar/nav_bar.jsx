import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div>
        <p>Hello, { this.props.currentUser.username }</p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link className='signup' to='/signup'>Sign Up</Link>
        <Link className='login' to='/login'>Log In</Link>
      </div>
    );
    return (
      <div>
        <span className='logo'>
          <Link to='/'>
            <img src='https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg'/>
          </Link>
        </span>
        {display}
      </div>
    );
  }

}

export default NavBar;
