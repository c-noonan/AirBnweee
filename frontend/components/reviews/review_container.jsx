import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { updateReview, deleteReview } from '../../actions/reviews';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
