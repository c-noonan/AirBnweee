import * as APIUtil from '../util/session';
// import { receiveErrors } from './errors';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createNewUser = formUser => dispatch => {
  return APIUtil.postUser(formUser).then(
    serverUser => dispatch(receiveCurrentUser(serverUser)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const login = formUser => dispatch => (
  APIUtil.postSession(formUser).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
);

export const clearErrors = () => dispatch => {
  return dispatch(receiveErrors([]));
};
