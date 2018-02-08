import { connect } from "react-redux";
import BookingForm from './booking_form';
import { createBooking } from '../../actions/bookings';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/errors';
import { fetchSpot } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => {
  console.warn(ownProps);
  return {
    spot: [ownProps.match.params.spotId],
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBooking: review => dispatch(createBooking(review)),
  clearErrors: () => dispatch(clearErrors()),
  fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm));
