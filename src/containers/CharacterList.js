import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActions from '../actions/characters.js';
import CharacterList from '../components/screens/CharacterList';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
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
