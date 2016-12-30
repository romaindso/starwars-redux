import React, { Component } from 'react';
import { Link } from 'react-router';
import './Starship.css';

class Starship extends Component {

  render() {
    const {
      id,
      name,
      model,
      length
    } = this.props.starship;

    return (
      <div className="Starship">
        <div className="Starship-wrapper-content">
          <Link to={`/${id}`}><h1>{name}</h1></Link>
          <span>{model}</span>
          <p>Size: {length} (meters)</p>
        </div>
      </div>
    );
  }
}

export default Starship;
