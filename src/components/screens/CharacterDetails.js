import React, { Component } from 'react';
import './ItemDetails.css';

class CharacterDetails extends Component {

  render() {
    const {
      name,
      birth_year,
      gender,
      height,
      mass,
      eye_color,
      hair_color
    } = this.props.character;

    return (
      <div className="CharacterDetails">
        <h1>{name}</h1>
        <h3>{birth_year}</h3>
        <div className="CharacterDetails-wrapper">
          <div className="CharacterDetails-properties">
            <h4>Main infos :</h4>
            <ul>
              <li>Gender <span>{gender}</span></li>
              <li>Height <span>{height}</span></li>
              <li>Mass <span>{mass}</span></li>
              <li>Eye Color <span>{eye_color}</span></li>
              <li>Hair Color <span>{hair_color}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
