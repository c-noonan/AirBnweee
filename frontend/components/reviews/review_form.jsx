import React from 'react';

class ReviewForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: ''
    };
  }

  // componentDidMount(){
  //   if (this.props.review.id) {
  //     this.props.fetchReview();
  //   }
  // }
  //
  // componentWillReceiveProps(newProps){
  //   this.setState(newProps.review);
  // }

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

  render(){
    console.log(this.props);
    return (
      <div className='review-form'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
