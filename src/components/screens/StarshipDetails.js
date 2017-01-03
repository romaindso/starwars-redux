import React, { Component } from 'react';
import './StarshipDetails.css';

class StarshipDetails extends Component {

  componentWillMount(){
    const { params } = this.props
    if(process.env.NODE_ENV !== 'production' && params.id){
      this.props.starshipsActions.fetchStarshipDetails(params.id);
    }
  }

  render() {
    const {
      name,
      model,
      length,
      cargo_capacity,
      hyperdrive_rating,
      passengers,
      manufacturer
    } = this.props.starshipDetails.data;

    return (
      <div className="StarshipDetails">
        <h1>{name}</h1>
        <h3>{model}</h3>
        <div className="StarshipDetails-wrapper">
          <div className="StarshipDetails-properties">
            <h4>Main properties :</h4>
            <ul>
              <li>Length <span>{length} (meters)</span></li>
              <li>Cargo capacity <span>{cargo_capacity} (kilograms)</span></li>
              <li>Hyperdrive rating <span>{hyperdrive_rating}</span></li>
              <li>Passengers <span>{passengers}</span></li>
            </ul>
            <p>Built with love by <b>{manufacturer}</b></p>
          </div>
          {process.env.NODE_ENV !== 'production' ?
          <div className="StarshipDetails-pilots">
            <h4>Pilots (fake) :</h4>
            <img src="http://facetheforce.today/random/150?r=1" alt="pilot" />
            <img src="http://facetheforce.today/random/150?r=2" alt="pilot" />
            <img src="http://facetheforce.today/random/150?r=3" alt="pilot" />
          </div>
          : null }
        </div>
      </div>
    );
  }
}

export default StarshipDetails;
