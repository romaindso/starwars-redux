import React, { Component } from 'react';
import { Link } from 'react-router';
import './Item.css';

class CharacterItem extends Component {

  render() {
    const {
      id,
      name,
      gender,
      birthYear
    } = this.props.character;

    return (
      <div className="CharacterItem">
        <div className="CharacterItem-wrapper-content">
          <Link to={`characters/${id}`}><h1>{name}</h1></Link>
          <span>Birth year : {birthYear}</span>
          <p>Gender : {gender}</p>
        </div>
      </div>
    );
  }
}

export default CharacterItem;
