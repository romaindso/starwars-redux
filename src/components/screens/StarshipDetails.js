import React, { Component } from 'react';
// import './StarshipDetails.css';

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
      passengers
    } = this.props.starshipDetails.data;

    return (
      <div className="StarshipDetails">
        <h1>{name}</h1>
        <div className="StarshipDetails-main-info">
          <h2>{model}</h2>
          <span>Size {length} (meters)</span>
        </div>
        <div className="StarshipDetails-properties">
          <ul>
            <li>Cargo capacity {cargo_capacity}</li>
            <li>Hyperdrive rating {hyperdrive_rating}</li>
            <li>Passengers {passengers}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StarshipDetails;
