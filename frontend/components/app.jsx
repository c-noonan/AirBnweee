import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SpotShowContainer from './spots/spot_show_container';
import MapSearchContainer from './map/map_search_container';
import SearchBarContainer from './search/search_bar_container';

export default () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/' component={SearchBarContainer} />
    <Route exact path='/spots/:spotId' component={SpotShowContainer} />
    <Route exact path='/spots' component={MapSearchContainer} />
  </div>
);
