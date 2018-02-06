class MarkerManager {

  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots){
    spots.forEach ((spot) => {
      if (!this.markers[spot.id]) {
        this.createMarkerFromSpot(spot);
      }
    });
  }

  createMarkerFromSpot(spot){
    const position = new google.maps.LatLng(spot.lat, spot.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });
    this.markers[marker.spotId] = marker;
  }

}

export default MarkerManager;
