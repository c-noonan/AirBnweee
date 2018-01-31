export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = (errors) => ({
  type: CLEAR_ERRORS,
  errors
});
