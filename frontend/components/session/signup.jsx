import React from 'react';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.login(demo)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div className='session-form'>
        <form>
          <div>&times;</div>
          <label id='username'>
            <input id='username-input'
              type='text'
              placeholder='Pick a Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
          </label>
          <label id='password'>
            <input id='password-input'
              type='password'
              placeholder='Create a Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
          </label>
          <button id='button' onClick={this.handleSubmit}>Sign Up</button>
          <button id='button' onClick={this.demoLogin}>Demo Login</button>
        </form>
      </div>
    );
  }
}

export default Signup;
