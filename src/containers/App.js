import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../actions/items.js';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
