import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from '../actions/bookings';
import _ from 'lodash';

export default (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return _.merge({}, action.bookings);
    case RECEIVE_BOOKING:
      return _.merge({}, action.booking );
    default:
      return oldState;
  }
};
