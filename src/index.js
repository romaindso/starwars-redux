import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';
import AppContainer from './containers/App';
import './index.css';

const store = configureStore([ thunk ]);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={AppContainer}>
        {/* <Route path="about" component={About}/>
        <Route path="users" component={Users}>
          <Route path="/user/:userId" component={User}/>
        </Route>
        <Route path="*" component={NoMatch}/> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
