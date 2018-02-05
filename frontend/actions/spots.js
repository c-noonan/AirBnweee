import * as APIUtil from '../util/spots';
import { receiveErrors } from './errors';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

export const receiveAllSpots = (spots) => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});

export const fetchSpots = () => dispatch => {
  return APIUtil.fetchSpots().then(
    serverSpots => dispatch(receiveAllSpots(serverSpots)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const fetchSpot = (id) => dispatch => {
  return APIUtil.fetchSpot(id).then(
    serverSpot => dispatch(receiveSpot(serverSpot)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};
