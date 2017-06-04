import React, { Component} from 'react';
import CharacterItem from '../ui/CharacterItem.js';
import Filter from '../ui/Filter.js';
import './StarshipList.css';

class CharacterList extends Component {

  componentWillMount(){
    this.props.charactersActions.fetchCharacters();
  }

  render(){
    const {characters, charactersActions} = this.props;

    return (
      <div className="CharacterList">
        <h1>Characters</h1>
        Show : 
        <Filter filter="all" action={charactersActions.setVisibilityFilter}>all</Filter>
        <Filter filter="male" action={charactersActions.setVisibilityFilter}>male</Filter>
        <Filter filter="female" action={charactersActions.setVisibilityFilter}>female</Filter>
        <Filter filter="n/a" action={charactersActions.setVisibilityFilter}>n/a</Filter>
        {characters.length ? characters.map((character, i) => {
          return <CharacterItem key={i} character={character} />
        }) : null}
      </div>
    )
  }
}

export default CharacterList;
