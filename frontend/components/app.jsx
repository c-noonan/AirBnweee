import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <Route path='/login' component={LoginContainer} />
  </div>
);
