import React from 'react';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  demoLogin(e){
    const demo = {
      username: 'username',
      password: 'password'
    };
    e.preventDefault(e);
    this.props.login(demo)
      .then(() => this.props.onClose());
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
        <form onSubmit={this.handleSubmit}>
          <div><button onClick={this.props.onClose}>&times;</button></div>
          <p id='errors'>{this.renderErrors()}</p>
          <label id='username'>
            <input id='username-input'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
            <img src='https://cdn4.iconfinder.com/data/icons/line-system/512/user-512.png' />
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
          <input className='button' type='submit' name='Log In' />
          <button className='button' type='button' onClick={this.demoLogin}>Demo Login</button>
          <span>
            <p>Don't have an account?</p>
            <button onClick={this.props.onSwitch}>Sign Up!</button>
          </span>
        </form>
      </div>
    );
  }
}

export default Login;
