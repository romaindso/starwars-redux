import { combineReducers } from 'redux';
import starships from './starships.js';
import starshipDetails from './starshipDetails.js';

export default combineReducers({
  starships,
  starshipDetails
})
