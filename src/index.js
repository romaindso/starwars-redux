import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';
import AppContainer from './containers/App';
import StarshipDetailsContainer from './containers/StarshipDetails';
import './index.css';

const store = configureStore([ thunk ]);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={AppContainer}/>
         <Route path=":id" component={StarshipDetailsContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
