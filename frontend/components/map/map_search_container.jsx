import { connect } from "react-redux";
import MapSpotSearch from './map_spot_search';
import { fetchSpots } from '../../actions/spots';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSpots: (search) => dispatch(fetchSpots(search))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MapSpotSearch));
