import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(middlewares=[], initialState={}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    // redux devtool chrome extension
    process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
