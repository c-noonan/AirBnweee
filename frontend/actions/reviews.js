import * as APIUtil from '../util/reviews';
import { receiveErrors } from './errors';

export const RECEIVE_ALL_REVEIWS = "RECEIVE_REVEIWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVEIWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const requestReviews = () => dispatch => {
  return APIUtil.fetchReviews().then(
    serverReviews => dispatch(receiveAllReviews(serverReviews)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const requestReview = (id) => dispatch => {
  return APIUtil.fetchReview(id).then(
    serverReview => dispatch(receiveReview(serverReview)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review).then(
    serverNewReview => dispatch(receiveReview(serverNewReview)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const updateReview = (review) => dispatch => {
  return APIUtil.updateReview(review).then(
    serverUpdateReview => dispatch(receiveReview(serverUpdateReview)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const deleteReview = (id) => dispatch => {
  return APIUtil.deleteReview(id).then(
    serverReview => dispatch(removeReview(id)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};
