import React, { Component } from 'react';
import './StarshipDetails.css';

class StarshipDetails extends Component {

  componentWillMount(){
    const { params } = this.props
    if(params.id){
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
        <div className="StarshipDetails-main-info">
          <h3>{model}</h3>
          <span>Length {length} (meters)</span>
        </div>
        <div className="StarshipDetails-properties">
          <ul>
            <li>Cargo capacity {cargo_capacity}</li>
            <li>Hyperdrive rating {hyperdrive_rating}</li>
            <li>Passengers {passengers}</li>
          </ul>
          <span>Built by {manufacturer}</span>
        </div>
      </div>
    );
  }
}

export default StarshipDetails;
