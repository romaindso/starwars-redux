import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActions from '../actions/characters.js';
import CharacterDetails from '../components/screens/CharacterDetails';

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

const CharacterDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetails)

export default CharacterDetailsContainer
