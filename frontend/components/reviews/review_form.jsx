import React from 'react';

class ReviewForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      spot_id: null,
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const review = this.setState({spot_id: parseInt(this.props.match.params.spotId)});
    this.props.createReview(review)
      .then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`));
    this.setState({
      spot_id: null,
      body: '',
    });
  }

  updateForm(field){

  }

  render(){
    return (
      <div>

      </div>
    );
  }

}

export default ReviewForm;
