import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import StarshipList from '../components/screens/StarshipList';

const mapStateToProps = (state) => {
  return {
    starships: state.starships
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    starshipsActions: bindActionCreators(starshipsActions, dispatch)
  }
}

const StarshipListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipList)

export default StarshipListContainer
