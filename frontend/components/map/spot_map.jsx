// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';

//   const mapOptions = {
//     center: { lat: 34.097392, lng: -118.276408 },
//     zoom: 10
//   };

//   const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
//   });

// class SpotMap extends React.Component {

//   constructor(props){
//     super(props);
//   }

//   componentDidMount(){
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//     this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
//     this.registerListeners();
//     this.MarkerManager.updateMarkers(this.props.spots);
//   }

//   registerListeners() {
//     google.maps.event.addListener(this.map, 'click', (event) => {
//       const coords = getCoordsObj(event.latLng);
//       // this.handleMarkerClick(coords);
//     });
//   }

//   handleMarkerClick(spot) {
//     this.props.history.push(`/spots/${spot.id}`);
//   }

//   componentDidUpdate(){
//     this.MarkerManager.updateMarkers(this.props.spots);
//   }

//   render(){
//     return (
//       <div id='map-container' className='sticky' ref={ map => this.mapNode = map }>
//       </div>
//     );
//   }

// }

// export default withRouter(SpotMap);


import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

const mapOptions = {
  center: {
    lat: 34.097392,
    lng: -118.276408
  },
  zoom: 10
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class SpotMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "click", event => {
      const coords = getCoordsObj(event.latLng);
      // this.handleMarkerClick(coords);
    });
  }

  handleMarkerClick(spot) {
    this.props.history.push(`/spots/${spot.id}`);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render(){
    return (
      <div id='map-container' className='sticky' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default withRouter(SpotMap);


// import React from "react";
// import ReactDOM from "react-dom";
// import { withRouter } from "react-router-dom";
// import MarkerManager from "../../util/marker_manager";

// const getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });

// const mapOptions = {
//   center: {
//     lat: 34.097392,
//     lng: -118.276408
//   },
//   zoom: 10
// };

// class SpotMap extends React.Component {

//   componentDidMount() {
//     const map = this.refs.map;
//     this.map = new google.maps.Map(map, mapOptions);
//     this.MarkerManager = new MarkerManager(
//       this.map,
//       this.handleMarkerClick.bind(this)
//     );
//       this.registerListeners();
//       this.MarkerManager.updateMarkers(this.props.spots);
//   }

//   componentDidUpdate() {
//     if (this.props.spots) {
//       const targetSpotKey = Object.keys(this.props.spots)[0];
//       const targetSpot = this.props.spots[targetSpotKey];
//       this.MarkerManager.updateMarkers([targetSpot]);
//     } else {
//       this.MarkerManager.updateMarkers(this.props.spots);
//     }
//   }

//   registerListeners() {
//     google.maps.event.addListener(this.map, "idle", () => {
//       const { north, south, east, west } = this.map.getBounds().toJSON();
//       const bounds = {
//         northEast: { lat: north, lng: east },
//         southWest: { lat: south, lng: west }
//       };
//       this.props.updateFilter("bounds", bounds);
//     });
//     google.maps.event.addListener(this.map, "click", event => {
//       const coords = getCoordsObj(event.latLng);
//       this.handleClick(coords);
//     });
//   }

//   handleMarkerClick(Spot) {
//     this.props.history.push(`spots/${spot.id}`);
//   }

//   handleClick(coords) {
//     this.props.history.push({
//       pathname: "spots/new",
//       search: `lat=${coords.lat}&lng=${coords.long}`
//     });
//   }

//   render(){
//     return (
//       <div id='map-container' className='sticky' ref={ map => this.mapNode = map }>
//       </div>
//     );
//   }
// }


// export default withRouter(SpotMap);