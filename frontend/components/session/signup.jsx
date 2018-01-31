import React from 'react';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  updateForm(field){
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  demoLogin(e){
    const demo = {
      username: 'username',
      password: 'password'
    };
    e.preventDefault(e);
    this.props.createNewUser(demo)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div className='session-form'>
        <form>
          <label>Username:
            <input
              type='text'
              placeholder='Pick a Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
          </label>
          <label>Password:
            <input
              type='password'
              placeholder='Create a Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
          </label>
          <button onClick={(e) => this.handleSubmit(e)}>Sign Up</button>
          <button onClick={(e) => this.demoLogin(e)}>Demo Login</button>
        </form>
      </div>
    );
  }
}

export default Signup;
