import React from 'react';

class SpotMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 34.097392, lng: -118.276408 },
      zoom: 10
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }

}

export default SpotMap;
