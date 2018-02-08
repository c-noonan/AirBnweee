import { combineReducers } from 'redux';
import spotsReducer from './spots';
import reviewsReducer from './reviews';
import bookingsReducer from '/bookings';

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  reviews: reviewsReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;
