import { RECEIVE_ALL_SPOTS } from '../actions/spots';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return _.merge({}, state, action.spots);
    default:
      return state;
  }
};
