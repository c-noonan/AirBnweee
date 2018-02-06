import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW } from '../actions/reviews';
import {
  RECEIVE_SPOT
} from '../actions/spots';

import _ from 'lodash';

export default (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SPOT:
      return _.merge({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      return _.merge({}, oldState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      newState = _.merge({}, oldState);
      delete newState[action.reviewId];
      return newState;
    default:
      return oldState;
  }
};
