import React from 'react';

class SpotIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul className='list-elements'>

          <img src={this.props.spot.image_url} />

          <span className='spot-info'>
              <li id='title'>
                {this.props.spot.title}
              </li>
              <ul id='spot-items'>
                  <li>
                    {this.props.spot.guests}
                  </li>
                  <li>
                    {this.props.spot.bedrooms}
                  </li>
                  <li>
                    {this.props.spot.bathrooms}
                  </li>
                  <li>
                    {this.props.spot.price}
                  </li>
              </ul>
          </span>

        </ul>
      </div>
    );
  }
}

export default SpotIndexItem;
