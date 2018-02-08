import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { clearErrors } from '../../actions/errors';
import { fetchSpots } from '../../actions/spots';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  fetchSpots: (search) => dispatch(fetchSpots(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
