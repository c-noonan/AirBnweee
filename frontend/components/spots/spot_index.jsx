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
    console.log(this.props);
    const spotItems = this.props.spots.map((spot) => (
      <SpotIndexItem key={spot.id} spot={spot} />
    ));
    return(
      <div className='index-page'>
        <span>{spotItems}</span>
      </div>
    );
  }
}

export default SpotIndex;
