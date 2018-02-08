import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='general-container'>
      <div className='background'></div>
      <div className='search-bar'>
        <span>Airbnweee</span>
        <p>Book homes around the world near all your favorite themeparks!</p>
        <Link to='/spots'>
          <p id='explore'>
            Explore Airbnweee
          </p>
        </Link>
        <ul className='themeparks'>
          <li className='disneyland'>
            <img src='https://images.unsplash.com/photo-1484923720570-4bc210954735?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=039cf9c30be0686b5287cd43e45de854&auto=format&fit=crop&w=750&q=80'/>
          </li>
          <li className='universal-studios'>
            <img src='https://cdn.pixabay.com/photo/2016/09/02/22/58/universal-studios-1640516_960_720.jpg'/>
          </li>
          <li className='six-flags'>
            <img src='https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd2e325a9114d0996dd4ea74d89400a&auto=format&fit=crop&w=667&q=80'/>
          </li>
          <Link to='/spots'>
            <li className='explore-all'>
              <img src='https://images.unsplash.com/photo-1451732401917-66d80311800f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a26de8df7ede7138df3912152d40dc15&auto=format&fit=crop&w=800&q=80'/>
            </li>
          </Link>
        </ul>
      </div>
      </div>
    );
  }

}

export default SearchBar;
