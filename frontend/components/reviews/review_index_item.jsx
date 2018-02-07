import React from 'react';

class ReviewIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='review-index'>
        <ul>
          <li><img id='review-author-image' src={this.props.review.reviewer_image_url}/></li>
          <li>{this.props.review.body}</li>
          <li>{this.props.review.reviewer_username}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;
