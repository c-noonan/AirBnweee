import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spots/spot_index';

const SpotSearch = ({ spots, fetchSpots, fetchSpot }) => {
  return (
    <div className='spots-index-with-map'>
      <SpotIndex spots={spots} fetchSpots={fetchSpots} />
      <SpotMap spots={spots}/>
    </div>
  );
};

export default SpotSearch;
