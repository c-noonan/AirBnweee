import React from 'react';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state)
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
      <div className='login-form'>
        <form>
          <label>Username:
            <input
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
          </label>
          <label>Password:
            <input
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
          </label>
          <button onClick={this.handleSubmit}>Log In</button>
          <button onClick={this.demoLogin}>Demo Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
