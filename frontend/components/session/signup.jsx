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
      .then(() => this.props.onClose())
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
      .then(() => this.props.onClose());
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
      <div className='session-form'>
        <form>
          <div>&times;</div>
          <p id='errors'>{this.renderErrors()}</p>
          <label id='username'>
            <input id='username-input'
              type='text'
              placeholder='Pick a Username'
              value={this.state.username}
              onChange={this.updateForm('username')}
              />
            <img src='http://icons.iconarchive.com/icons/iconsmind/outline/512/Email-icon.png' />
          </label>
          <label id='password'>
            <input id='password-input'
              type='password'
              placeholder='Create a Password'
              value={this.state.password}
              onChange={this.updateForm('password')}
              />
            <img src='https://image.freepik.com/iconos-gratis/bloquee-esbozado-simbolo-de-candado-para-la-interfaz-de-seguridad_318-71943.jpg' />
          </label>
          <button id='button' onClick={this.handleSubmit}>Sign Up</button>
          <button id='button' onClick={this.demoLogin}>Demo Login</button>
          <span>
            <p>Already have an account?</p>
            <p>Log In!</p>
          </span>
        </form>
      </div>
    );
  }
}

export default Signup;
