import * as APIUtil from '../util/bookings';
import { receiveErrors } from './errors';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_REVEIWS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

export const receiveAllBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const requestBookings = () => dispatch => {
  return APIUtil.fetchBookings().then(
    serverBookings => dispatch(receiveAllBookings(serverBookings)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const requestBooking = (id) => dispatch => {
  return APIUtil.fetchBooking(id).then(
    serverBooking => dispatch(receiveBooking(serverBooking)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const createBooking = (booking) => dispatch => {
  return APIUtil.createBooking(booking).then(
    serverNewBooking => dispatch(receiveBooking(serverNewBooking)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};
