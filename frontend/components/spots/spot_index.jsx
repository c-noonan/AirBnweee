import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
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
    if (this.props.spots.length === 0) {
      return (
        <div className="search-errors">
          <p id='first-error'>Sorry, no items under that search exist!</p>
          <Link to='/'>
            <p id='second-error'>Back to search</p>
          </Link>
        </div>
      );
    } else {
      return(
        <div className='index-page'>
          <span>{spotItems}</span>
        </div>
      );
    }
  }
}

export default SpotIndex;
