import React from 'react';
// import { Link } from 'react-router';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }
  //
  // componentWillReceiveProps(newProps){
  //   if (this.props.match.params.spotId !== newProps.match.params.spotId)
  //     this.props.fetchSpot(newProps.match.params.spotId);
  // }

  render () {
    if (!this.props.spot) return <h1>Loading...</h1>;
      console.log(this.props.spot);
    return (
      <div className='spots-show-info'>
        <img id='house-image' src={this.props.spot.image_url} />
        <ul className='spots-show-list'>
          <li id='header'>
            ENTIRE PLACE
          </li>
          <li id='show-page-title'>{this.props.spot.title}</li>
          <li>
            <ul>
              <img src='https://image.freepik.com/free-icon/multiple-users-silhouette_318-49546.jpg' />
              <li id='show-page-guests'>{this.props.spot.guests} guests &nbsp;&nbsp;</li>
              <img src='http://freevector.co/wp-content/uploads/2014/03/59805-opened-door-aperture.png' />
              <li id='show-page-bedrooms'>{this.props.spot.bedrooms} bedrooms &nbsp;&nbsp;</li>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4MdemNF_P6d4Lcw7byOhV0TLdVJHfuqepdS4-MQY3e60uhLU' />
              <li id='show-page-bathrooms'>{this.props.spot.bathrooms} bathrooms</li>
            </ul>
          </li>
          <li id='show-page-description'>{this.props.spot.description}</li>
        </ul>
      </div>
    );
  }
}

export default SpotShow;
