import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SpotIndexContainer from './spots/spot_index_container';

export default () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/spots' component={SpotIndexContainer} />
  </div>
);
