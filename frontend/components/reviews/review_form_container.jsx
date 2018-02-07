import { connect } from "react-redux";
import ReviewForm from './review_form';
import { createReview, updateReview, deleteReview } from '../../actions/reviews';

const mapStateToProps = (state, ownProps) => {
  return { reviews: Object.values(state.entities.reviews) };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
