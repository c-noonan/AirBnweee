import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return { reviews: Object.values(state.entities.reviews) };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
