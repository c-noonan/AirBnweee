import React from 'react';
import SpotMap from './spot_map';
import SpotIndex from '../spots/spot_index';

const MapSpotSearch = (props) => {
  return (
    <div className='spots-index-with-map'>
      <SpotIndex {...props} />
      <SpotMap {...props}/>
    </div>
  );
};

export default MapSpotSearch;
