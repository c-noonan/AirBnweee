import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spots/spot_index';

const SpotSearch = ({ spots, fetchSpots }) => {
  return (
    <div>
      <SpotMap />
      <SpotIndex spots={spots} fetchSpots={fetchSpots}/>
    </div>
  );
};

export default SpotSearch;
