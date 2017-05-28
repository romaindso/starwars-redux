import { combineReducers } from 'redux';
import starships from './starships.js';
import characters from './characters.js';

export default combineReducers({
  characters,
  starships
})
