import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='search-bar'>
        <Link to='/spots'>
          <span>Airbnbweee</span>
          <p>Book homes around the world near all your favorite themeparks!</p>
        </Link>
        <span id='explore'>
          Explore Airbnbweee
        </span>
      </div>
    );
  }

}

export default SearchBar;
