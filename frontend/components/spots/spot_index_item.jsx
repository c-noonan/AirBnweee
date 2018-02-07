import React from 'react';
import { Link } from 'react-router-dom';
import SpotShowContainer from './spot_show_container';
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

  openModal(serverId){
    this.setState({ modalOpen: true });
    this.props.fetchSpot(serverId);
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
            <SpotShowContainer
              spot={this.props.spot}
              onClose={() => this.closeModal()}/>
          </div>
        </Modal>;

    return(
      <div>
        <button onClick={() => this.openModal(this.props.spot.id)}>
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
          {theModal}
        </button>
      </div>
    );
  }
}

export default SpotIndexItem;
