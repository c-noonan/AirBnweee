import { connect } from "react-redux";
import SpotSearch from './spot_search';
import { fetchSpots, fetchSpot } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => ({
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotSearch);
