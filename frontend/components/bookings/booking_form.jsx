import React from 'react';
import { withRouter, Redirect } from "react-router-dom";

class BookingForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      guests: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount() {
    this.props.clearBooking();
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const booking = Object.assign({}, this.state, {
      spot_id: parseInt(this.props.match.params.spotId),
    });
    this.props.clearErrors();
    this.props.createBooking(booking)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`))
      .then(() => this.setState({ start_date: '', end_date: '', guests: '' }));
  }

  updateForm(field){
    return(e) => (
      this.setState({ [field]: e.target.value })
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

  renderBooking(){
    if (!this.props.booking) {
      return;
    } else if (this.props.booking.length !== 0)
      return <ul>
          <li>Congratulations! You're booked!</li>
          <li>
            Dates: {this.props.booking[0]} - {this.props.booking[1]}
          </li>
          <li>Guests: {this.props.booking[2]}</li>
        </ul>;
  }

  render(){    
    
    return (
      <div className='booking-container'>
        <form className='booking-form' onSubmit={this.handleSubmit}>
          <span>${this.props.spot.price}&nbsp;per night</span>
          <p>
            <p id='dates'>Dates</p>
            <label>
              {" "}
              <input
                id='start-date'
                type='date'
                value={this.state.start_date}
                onChange={this.updateForm('start_date')}
              />
            </label>
            <label>
              {" "}
              <input
                id='end-date'
                type='date'
                value={this.state.end_date}
                onChange={this.updateForm('end_date')}
              />
            </label>
          </p>
          <p id='booking-guests'>Guests</p>
          <select className='dropdown' value={this.state.guests} onChange={this.updateForm('guests')}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
          </select>
          <p id='errors'>{this.renderErrors()}</p>
          <p id='errors'>{this.renderBooking()}</p>
          <input id='create-booking-button' type='submit' value='Check Availability'/>
        </form>
      </div>
    );
  }

}

export default withRouter(BookingForm);

