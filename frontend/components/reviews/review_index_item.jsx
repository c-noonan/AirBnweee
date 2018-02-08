import React from 'react';

class ReviewIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  isCurrentUser(){
    if (window.currentUser && window.currentUser.id === this.props.review.author_id) {
      return (
          <div>
            <img id='create-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-79QIODe9fgOSRU4x3ZBPAg6Tp-M1BMSGmikxJcZBDSO1H2A'/>
            <img id='trash-can-icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/446206-200.png'/>
          </div>
        );
    }
    return null;
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
