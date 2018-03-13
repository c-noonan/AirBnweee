// class MarkerManager {
  
//   constructor(map, handleMarkerClick) {
//     this.map = map;
//     this.markers = {};
//     this.handleMarkerClick = handleMarkerClick;
//   }

//   updateMarkers(spots) {
//     spots.forEach(spot => {
//       if (!this.markers[spot.id]) {
//         this.createMarkerFromSpot(spot);
//       }
//     });
//   }

//   createMarkerFromSpot(spot) {
//     const position = new google.maps.LatLng(spot.lat, spot.long);
//     const marker = new google.maps.Marker({
//       position,
//       map: this.map,
//       spotId: spot.id
//     });
//     this.markers[marker.spotId] = marker;
//   }
// }

// export default MarkerManager;

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => (spotsObj[spot.id] = spot));

    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(newSpot =>
        this.createMarkerFromspot(newSpot, this.handleClick)
      );

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach(spotId => this.removeMarker(this.markers[spotId]));
  }

  createMarkerFromspot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    marker.addListener("click", () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}

export default MarkerManager;
