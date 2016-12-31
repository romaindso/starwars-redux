import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';
import App from './components/screens/App';
import StarshipsContainer from './containers/Starships';
import StarshipDetailsContainer from './containers/StarshipDetails';
import './index.css';

const store = configureStore([ thunk ]);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={App} >
        <IndexRoute component={StarshipsContainer}/>
        <Route path="/starships" component={StarshipsContainer}/>
        <Route path=":id" component={StarshipDetailsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
