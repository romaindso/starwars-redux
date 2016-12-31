import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import Starships from '../components/screens/Starships';

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

const StarshipsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships)

export default StarshipsContainer
