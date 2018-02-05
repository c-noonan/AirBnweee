import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => {
  return {spot: state.entities.spots[ownProps.match.params.spotId]};
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
