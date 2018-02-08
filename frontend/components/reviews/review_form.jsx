import React from 'react';

class ReviewForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: ''
    };
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.review);
  }

  handleSubmit(e){
    e.preventDefault();
    const review = Object.assign({}, this.state, {
      spot_id: parseInt(this.props.match.params.spotId),
    });
    this.props.createReview(review)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`));
    this.setState({
      body: ''
    });
  }

  updateForm(field){
    return(e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  // isCurrentUser(){
  //   let action;
  //   if (window.currentUser && window.currentUser.id === this.props.reviews.author_id) {
  //     return null;
  //   }
  // }

  renderErrors(){
    console.log(this.props);
    if (!this.props.errors) {
      return;
    }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div className='review-form'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p id='errors'>{this.renderErrors()}</p>
          <label>
            <input
              type='textarea'
              placeholder='Write a Review!'
              value={this.state.body}
              onChange={this.updateForm('body')}
            />
          </label>
          <input id='create-review-button' type='submit' value='Create Review'/>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
