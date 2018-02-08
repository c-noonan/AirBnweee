import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.location.search);
    if (this.props.location.search === '') {
      this.props.fetchSpots();
    } else {
      this.props.fetchSpots(this.props.location.search.slice(8));
    }
  }

  render() {
    const spotItems = this.props.spots.map((spot) => (
      <SpotIndexItem key={spot.id} spot={spot}/>
    ));
    return(
      <div className='index-page'>
        <span>{spotItems}</span>
      </div>
    );
  }
}

export default SpotIndex;
