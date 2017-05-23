import React, { Component } from 'react';
import { Link } from 'react-router';
import './StarshipItem.css';

class StarshipItem extends Component {

  render() {
    const {
      id,
      name,
      model,
      length
    } = this.props.starship;

    return (
      <div className="StarshipItem">
        <div className="StarshipItem-wrapper-content">
          <Link to={`starships/${id}`}><h1>{name}</h1></Link>
          <span>{model}</span>
          <p>Length : {length} (meters)</p>
        </div>
      </div>
    );
  }
}

export default StarshipItem;
