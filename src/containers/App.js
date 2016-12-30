import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as starshipsActions from '../actions/starships.js';
import App from '../components/App';

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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
