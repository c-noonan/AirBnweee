import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from '../actions/spots';
import _ from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return _.merge({}, action.spots);
    case RECEIVE_SPOT:
      return _.merge({}, oldState, {[action.spot.id]: action.spot});
    default:
      return oldState;
  }
};
