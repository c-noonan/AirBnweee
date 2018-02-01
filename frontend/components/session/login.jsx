import React from 'react';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.onClose())
      .then(() => this.props.history.push('/'));
  }

  updateForm(field){
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className='login-form'>
        <form>
          <div>&times;</div>
          <div id='errors'>{this.renderErrors}</div>
          <label id='username'>
            <input id='username-input'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
          </label>
          <label id='password'>
            <input id='password-input'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
          </label>
          <button id='button' onClick={this.handleSubmit}>Log In</button>
          <span>
            <p>Don't have an account?</p>
            <p>Sign Up!</p>
          </span>
        </form>
      </div>
    );
  }
}

export default Login;
