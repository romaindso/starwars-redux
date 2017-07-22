import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActions from '../actions/characters.js';
import CharacterDetails from '../components/screens/CharacterDetails';

const mapStateToProps = (state) => {
  return {
    // TODO
    // Use your new selector to retrieve the character to display
    // You will need his id which is avalaible in the url
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
