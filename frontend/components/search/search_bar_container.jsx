import { connect } from "react-redux";
import SearchBar from './search_bar';
import { fetchSpots } from '../../actions/spots';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSpots: (search) => dispatch(fetchSpots(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
