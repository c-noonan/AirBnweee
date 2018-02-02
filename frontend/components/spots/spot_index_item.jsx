import React from 'react';

class SpotIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        {this.props.spot.id}
        {this.props.spot.owner_id}
        {this.props.spot.image_url}
        {this.props.spot.description}
        {this.props.spot.lat}
        {this.props.spot.long}
      </li>
    );
  }
}

export default SpotIndexItem;
