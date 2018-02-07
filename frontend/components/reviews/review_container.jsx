import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createReview } from '../../actions/reviews';

const mapStateToProps = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews)
});

const mapDispatchToProps = (dispatch) => ({
  // createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
