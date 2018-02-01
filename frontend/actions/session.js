import * as APIUtil from '../util/session';
import { receiveErrors } from './errors';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
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
