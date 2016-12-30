import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import StarshipDetails from '../components/StarshipDetails';

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

const StarshipDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipDetails)

export default StarshipDetailsContainer
