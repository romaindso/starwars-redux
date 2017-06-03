import React, { Component } from 'react';
import './ItemDetails.css';

class CharacterDetails extends Component {

  render() {
    const {id} = this.props.params;
    const character = this.props.characters.filter(character => character.id === id)[0];
    const {
      name,
      birthYear,
      gender,
      height,
      mass,
      eyeColor,
      hairColor
    } = character;

    return (
      <div className="CharacterDetails">
        <h1>{name}</h1>
        <h3>{birthYear}</h3>
        <div className="CharacterDetails-wrapper">
          <div className="CharacterDetails-properties">
            <h4>Main infos :</h4>
            <ul>
              <li>Gender <span>{gender}</span></li>
              <li>Height <span>{height}</span></li>
              <li>Mass <span>{mass}</span></li>
              <li>Eye Color <span>{eyeColor}</span></li>
              <li>Hair Color <span>{hairColor}</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
