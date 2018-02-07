import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewFormContainer from './review_form_container';

class ReviewIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const reviewItems = this.props.reviews.map((review) => (
      <ReviewIndexItem key={review.id} review={review} />
    ));
    return (
      <div className='review-box'>
        <span>{reviewItems}</span>
        <span><ReviewFormContainer/></span>
      </div>
    );
  }

}

export default ReviewIndex;
