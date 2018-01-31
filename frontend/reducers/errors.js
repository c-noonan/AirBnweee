import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/errors';

export default (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};
