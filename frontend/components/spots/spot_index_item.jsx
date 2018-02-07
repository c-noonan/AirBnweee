import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import style from './show_modal_style.js';

class SpotIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  render(){
    const theModal =
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="Modal"
          >
          <div>
            <div className='modal-spots-show-info'>
              <div><button id='close-on-show-modal' onClick={this.closeModal}>&times;</button></div>
              <Link to={`/spots/${this.props.spot.id}`}>
              <img id='modal-house-image' src={this.props.spot.image_url} />
              <ul className='modal-spots-show-list'>
                <li id='modal-header'>
                  ENTIRE PLACE
                </li>
                <li id='modal-show-page-title'>{this.props.spot.title}</li>
                <li>
                  <ul>
                    <img src='https://image.freepik.com/free-icon/multiple-users-silhouette_318-49546.jpg' />
                    <li id='modal-show-page-guests'>{this.props.spot.guests} guests &nbsp;&nbsp;</li>
                    <img src='http://freevector.co/wp-content/uploads/2014/03/59805-opened-door-aperture.png' />
                    <li id='modal-show-page-bedrooms'>{this.props.spot.bedrooms} bedrooms &nbsp;&nbsp;</li>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4MdemNF_P6d4Lcw7byOhV0TLdVJHfuqepdS4-MQY3e60uhLU' />
                    <li id='modal-show-page-bathrooms'>{this.props.spot.bathrooms} bathrooms</li>
                  </ul>
                </li>
                <li id='modal-show-page-description'>{this.props.spot.description}</li>
              </ul>
              <p id='modal-show-page'>View More Details</p>
            </Link>
            </div>
          </div>
        </Modal>;

    return(
      <div>
        <button onClick={() => this.openModal()}>
          <ul className='list-elements'>
            <div id='image-holder'><img src={this.props.spot.image_url} /></div>
            <span>
              <li id='header'>
                ENTIRE PLACE
              </li>
              <li id='title'>
                {this.props.spot.title}
              </li>
              <ul id='spot-items'>
                <li>{this.props.spot.guests} guests ·&nbsp;</li>
                <li>{this.props.spot.bedrooms} bedrooms ·&nbsp;</li>
                <li>{this.props.spot.bathrooms} bathrooms</li>
              </ul>
              <li id='price'>
                ${this.props.spot.price} per night
              </li>
            </span>
          </ul>
        </button>
        {theModal}
      </div>
    );
  }
}

export default SpotIndexItem;
