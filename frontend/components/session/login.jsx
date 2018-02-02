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
    if (!this.props.errors) {
      return;
    }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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
          <p id='errors'>{this.renderErrors()}</p>
          <label id='username'>
            <input id='username-input'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
            <img src='http://icons.iconarchive.com/icons/iconsmind/outline/512/Email-icon.png' />
          </label>
          <label id='password'>
            <input id='password-input'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
            <img src='https://image.freepik.com/iconos-gratis/bloquee-esbozado-simbolo-de-candado-para-la-interfaz-de-seguridad_318-71943.jpg' />
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
