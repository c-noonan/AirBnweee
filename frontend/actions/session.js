import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => {
  return APIUtil.postUser(formUser)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};

export const login = formUser => dispatch => {
  return APIUtil.postSession(formUser)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};

export const logout = () => dispatch => {
  return APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
};
