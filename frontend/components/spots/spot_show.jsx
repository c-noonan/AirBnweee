import React from 'react';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render () {
    return (
      <div>
        <img src={this.props.spot.image_url} />
        {this.props.spot.title}
        {this.props.spot.description}
        {this.props.spot.guests}
        {this.props.spot.bedrooms}
        {this.props.spot.bathrooms}
        ${this.props.spot.price}
      </div>
    );
  }
}

export default SpotShow;
