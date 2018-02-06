import { combineReducers } from 'redux';
import spotsReducer from './spots';
import reviewsReducer from './reviews';

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
