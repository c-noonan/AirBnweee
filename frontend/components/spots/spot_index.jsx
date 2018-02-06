import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotSearch from '../search/search_container';

class SpotIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSpots();
  }

  render() {
    console.log(this.props);
    const spotItems = this.props.spots.map((spot) => (
      <SpotIndexItem key={spot.id} spot={spot} />
    ));
    return(
      <div className='index-page'>
        <span className='header-filter'>
          <h1>Welcome to Airbnweee</h1>
        </span>
        <span>{spotItems}</span>
        <span id='map'>the map</span>
      </div>
    );
  }
}

export default SpotIndex;
