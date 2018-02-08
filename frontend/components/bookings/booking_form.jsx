import React from 'react';

class BookingForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      guests: ''
    };
  }

  // componentDidMount(){
  //   this.setState(this.props.fetchSpot(this.props.spot.id));
  //   console.log(this.state);
  // }

  handleSubmit(e){
    e.preventDefault();
    const booking = Object.assign({}, this.state, {
      spot_id: parseInt(this.props.match.params.spotId),
    });
    this.props.createBooking(booking)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`));
    this.setState({
      start_date: '',
      end_date: '',
      guests: ''
    });
  }

  updateForm(field){
    return(e) => (
      this.setState({ [field]: e.target.value }),
      this.props.clearErrors()
    );
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

  render(){
    return (
      <div className='booking-container'>
        <form className='booking-form' onSubmit={(e) => this.handleSubmit(e)}>
          <span>${this.props.spot.price}per night</span>
          <p id='errors'>{this.renderErrors()}</p>
          <p>
            <p id='dates'>Dates</p>
            <label>
              <input
                id='start-date'
                type='date'
                value={this.state.start_date}
                onChange={this.updateForm('start_date')}
              />
            </label>
            <label>
              <input
                id='end-date'
                type='date'
                value={this.state.end_date}
                onChange={this.updateForm('end_date')}
              />
            </label>
          </p>
          <p id='booking-guests'>Guests</p>
          <select className='dropdown'>
            <option onChange={this.updateForm('guests')} value='1'>1</option>
            <option onChange={this.updateForm('guests')} value='2'>2</option>
            <option onChange={this.updateForm('guests')} value='3'>3</option>
            <option onChange={this.updateForm('guests')} value='4'>4</option>
            <option onChange={this.updateForm('guests')} value='5'>5</option>
            <option onChange={this.updateForm('guests')} value='6'>6</option>
            <option onChange={this.updateForm('guests')} value='7'>7</option>
            <option onChange={this.updateForm('guests')} value='8'>8</option>
          </select>
          <input id='create-booking-button' type='submit' value='Check Availability'/>
        </form>
      </div>
    );
  }

}

export default BookingForm;
