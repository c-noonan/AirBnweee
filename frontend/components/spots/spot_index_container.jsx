import { connect } from "react-redux";
import SpotIndex from './spot_index';
import { fetchSpots } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { spots: Object.values(state.entities.spots) };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
