import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <Link to={`/spots/${this.props.spot.id}`}>
          <ul className='list-elements'>
            <img src={this.props.spot.image_url} />
            <span>
              <li id='header'>
                ENTIRE PLACE
              </li>
              <li id='title'>
                {this.props.spot.title}
              </li>
              <ul id='spot-items'>
                <li>{this.props.spot.guests} guests ·&nbsp;</li>
                <li>{this.props.spot.bedrooms} bedrooms ·&nbsp;</li>
                <li>{this.props.spot.bathrooms} bathrooms</li>
              </ul>
              <li id='price'>
                ${this.props.spot.price} per night
              </li>
            </span>
          </ul>
        </Link>
      </div>
    );
  }
}

export default SpotIndexItem;
