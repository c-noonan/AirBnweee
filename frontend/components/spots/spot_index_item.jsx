import React from 'react';

class SpotIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul className='list-elements'>
          <img src={this.props.spot.image_url} />
          <span>
              <li id='title'>
                {this.props.spot.title}
              </li>
              <ul id='spot-items'>
                <li>{this.props.spot.guests} guests</li>&bull;
                <li>{this.props.spot.bedrooms} bedrooms</li>&bull;
                <li>{this.props.spot.bathrooms} bathrooms</li>
              </ul>
              <li id='price'>
                ${this.props.spot.price} per night
              </li>
          </span>
        </ul>
      </div>
    );
  }
}

export default SpotIndexItem;
