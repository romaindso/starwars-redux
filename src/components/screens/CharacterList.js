import React, { Component} from 'react';
import CharacterItem from '../ui/CharacterItem.js';
import './StarshipList.css';

class CharacterList extends Component {

  componentWillMount(){
    this.props.charactersActions.fetchCharacters();
  }

  render(){
    const {characters} = this.props;

    return (
      <div className="CharacterList">
        <h1>Characters</h1>
        {characters.length ? characters.map((character, i) => {
          return <CharacterItem key={i} character={character} />
        }) : null}
      </div>
    )
  }
}

export default CharacterList;
