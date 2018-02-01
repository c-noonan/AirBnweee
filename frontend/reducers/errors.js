import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/errors';

const _noErrors = {
  errors: null
};

export default (state = _noErrors, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return state;
    default:
      return state;
  }
};
