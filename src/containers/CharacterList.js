import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActions from '../actions/characters.js';
import CharacterList from '../components/screens/CharacterList';

const mapStateToProps = (state, props) => {
  let activeFilter = props.location.query.activeFilter || 'all';
  return {
    characters: activeFilter === 'all' ? state.characters : state.characters.filter(character => character.gender === activeFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    charactersActions: bindActionCreators(charactersActions, dispatch)
  }
}

const CharacterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default CharacterListContainer
