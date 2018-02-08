import React from 'react';
import { Link } from 'react-router';

class ReviewIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`));
  }

  isCurrentUser(){
    if (this.props.currentUser && this.props.currentUser.id === this.props.review.author_id) {
      return (
          <div id='trash-can-icon'>
            <button onClick={(e) => this.handleSubmit(e)}>
              <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/446206-200.png'/>
            </button>
          </div>
        );
    }
  }

  render(){
    return (
      <div className='review-index'>
        <ul>
          <li><img id='review-author-image' src={this.props.review.reviewer_image_url}/></li>
          <li id='review-username'>{this.props.review.reviewer_username}</li>
          <li id='review-body'>{this.props.review.body}</li>
          <li>{this.isCurrentUser()}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;
