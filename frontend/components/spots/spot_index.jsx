import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSpots();
  }

  render() {
    const spotItems = this.props.spots.map((spot) => (
      <SpotIndexItem key={spot.id} spot={spot} fetchSpot={this.props.fetchSpot}/>
    ));
    return(
      <div className='index-page'>
        <span>{spotItems}</span>
      </div>
    );
  }
}

export default SpotIndex;
