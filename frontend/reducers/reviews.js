import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW } from '../actions/reviews';
import _ from 'lodash';

export default (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return _.merge({}, oldState, action.reviews);
    case RECEIVE_REVIEWS:
      return _.merge({}, oldState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      newState = _.merge({}, oldState);
      delete newState[action.reviewId];
      return newState;
    default:
      return oldState;
  }
};
