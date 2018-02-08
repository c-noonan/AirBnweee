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
          <div>
            <button onClick={(e) => this.handleSubmit(e)}>
              <img id='trash-can-icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/446206-200.png'/>
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
          <li>{this.props.review.body}</li>
          <li>{this.props.review.reviewer_username}</li>
          <li>{this.isCurrentUser()}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;


// <Link onClick={this.props.deleteReview()}>
//   <img id='create-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-79QIODe9fgOSRU4x3ZBPAg6Tp-M1BMSGmikxJcZBDSO1H2A'/>
// </Link>
