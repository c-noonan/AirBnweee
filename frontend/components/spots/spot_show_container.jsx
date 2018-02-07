import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {spot: ownProps.spot};
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
