import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import StarshipsList from '../components/screens/StarshipsList';

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

const StarshipsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipsList)

export default StarshipsListContainer
