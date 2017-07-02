import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore, {sagaMiddleware} from './store/configureStore';
import thunk from 'redux-thunk';
import App from './components/appshell/App';
import StarshipList from './containers/StarshipList';
import StarshipDetails from './containers/StarshipDetails';
import CharacterList from './containers/CharacterList';
import CharacterDetails from './containers/CharacterDetails';
import rootSaga from "./sagas";
import './index.css';

const store = configureStore([ thunk ]);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={App} >
        <IndexRedirect to="/starships"/>
        <Route path="/starships" component={StarshipList}/>
        <Route path="/starships/:id" component={StarshipDetails}/>
        <Route path="/characters" component={CharacterList}/>
        <Route path="/characters/:id" component={CharacterDetails}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
