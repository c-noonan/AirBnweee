import { connect } from "react-redux";
import BookingForm from './booking_form';
import { createBooking } from '../../actions/bookings';
import { withRouter } from 'react-router-dom';
import { clearErrors, clearBooking } from '../../actions/bookings';
import { fetchSpot } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: ownProps.spot,
    booking: Object.values(state.entities.bookings),
    errors: state.errors.bookings
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(clearErrors()),
  fetchSpot: (id) => dispatch(fetchSpot(id)),
  clearBooking: () => dispatch(clearBooking())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm));
