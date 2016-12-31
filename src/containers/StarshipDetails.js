import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import StarshipDetails from '../components/screens/StarshipDetails';

const mapStateToProps = (state) => {
  return {
    starshipDetails: state.starshipDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    starshipsActions: bindActionCreators(starshipsActions, dispatch)
  }
}

const StarshipDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipDetails)

export default StarshipDetailsContainer
