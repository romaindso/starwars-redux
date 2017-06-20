import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActions from '../actions/characters.js';
import CharacterDetails from '../components/screens/CharacterDetails';
import { getCharacter } from '../reducers/characters';

const mapStateToProps = (state, props) => {
  const {id} = props.params;
  return {
    character: getCharacter(state.characters, id)
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
