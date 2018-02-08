import { connect } from "react-redux";
import ReviewForm from './review_form';
import { createReview, updateReview, deleteReview } from '../../actions/reviews';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/errors';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
