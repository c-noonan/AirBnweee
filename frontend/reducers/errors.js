import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/errors';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return null;
      }
    case CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
};
