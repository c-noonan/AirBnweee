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

  handleSubmit(e){
    e.preventDefault();
    const booking = Object.assign({}, this.state, {
      spot_id: parseInt(this.props.match.params.spotId),
    });
    this.props.clearErrors();
    this.props.createBooking(booking)
      // .then(() => window.alert("Congrats you are booked!"))
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`))
      .then(() => this.setState({ start_date: '', end_date: '', guests: '' }));
  }

//     const spotId = parseInt(this.props.match.params.spotId);
//     const booking = Object.assign({}, this.state, { spot_id: spotId });
//     this.props.clearErrors();
//     this.props
//       .createBooking(booking)
//       .then(() =>
//         this.props.history.push(`/users/${this.props.currentUser.id}`)
//       );
//   }

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
    }
      return (
        <ul>
          {this.props.booking.map((booking, i) => (
            <li key={`booking-${i}`}>
              {booking}
            </li>
          ))}
        </ul>
      );
  }

  // renderErrors() {
  //   if (!this.props.errors) {
  //     return;
  //   }
  //   return (
  //     <ul>
  //       <li id="booking-errors">{this.props.errors[0]}</li>
  //     </ul>
  //   );
  // }

  render(){
    console.warn(this.props);
    
    
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

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         {this.renderErrors()}
  //         <label>
  //           {" "}
  //           <h2>Check In</h2>
  //           <input
  //             id="check-in-date"
  //             type="date"
  //             onChange={this.update("start_date")}
  //           />
  //         </label>
  //         <label>
  //           {" "}
  //           <h2>Check Out</h2>
  //           <input
  //             id="check-out-date"
  //             type="date"
  //             onChange={this.update("end_date")}
  //           />
  //         </label>
  //         <input id="booking-form-submit" type="submit" value="Book Doghouse" />
  //       </form>
  //     </div>
  //   );
  // }

export default withRouter(BookingForm);

