import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSpots(this.state.search)
      .then(() => this.props.history.push(`/spots/?search=${this.state.search}`));
  }

  updateForm(field){
    return(e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  render(){
    return (
      <div className='general-container'>
      <div className='background'></div>
      <div className='search-bar'>
        <span>Airbnweee</span>
        <p>Book homes around the world near all your favorite themeparks!</p>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/15028-200.png'/>
          <input
            id="search-form-input"
            type='text'
            placeholder='Discover adventure...'
            value={this.state.search}
            onChange={this.updateForm("search")}
            />
        </form>
        <p id='explore'>
          Explore Airbnweee
        </p>
        <ul className='themeparks'>

          <Link to='/spots'>
            <li className='disneyland'>
              <img src='https://images.unsplash.com/photo-1484923720570-4bc210954735?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=039cf9c30be0686b5287cd43e45de854&auto=format&fit=crop&w=750&q=80'/>
            </li>
          </Link>

          <Link to='/spots'>
            <li className='universal-studios'>
              <img src='https://cdn.pixabay.com/photo/2016/09/02/22/58/universal-studios-1640516_960_720.jpg'/>
            </li>
          </Link>

          <Link to='/spots'>
            <li className='six-flags'>
              <img src='https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd2e325a9114d0996dd4ea74d89400a&auto=format&fit=crop&w=667&q=80'/>
            </li>
          </Link>

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
