import { combineReducers } from 'redux';
import starships from './starships.js';
import starship from './starship.js';
import characters from './characters.js';

export default combineReducers({
  characters,
  starships,
  starship
})
