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

  render() {
    return(
      <div className='session-form'>
      </div>
    );
  }
}

export default Signup;
