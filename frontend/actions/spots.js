import * as APIUtil from '../util/spots';
import { receiveErrors } from './errors';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";

export const receiveAllSpots = (spots) => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

export const fetchSpots = () => dispatch => {
  return APIUtil.fetchSpots().then(
    serverSpots => dispatch(receiveAllSpots(serverSpots)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  );
};
