import { combineReducers } from 'redux';
import character from './character';

// Sub Reducers
const byId = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      let newState = {...state};
      action.data.map(item => {
        let act = {data: {...item}, type: action.type};
        let id = item.url.match(/\/([0-9]+)\/$/)[1];
        newState[id] = character(undefined, act);
      });
      return newState;

    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      const charactersIdList = action.data.map(item => {
        let id = item.url.match(/\/([0-9]+)\/$/)[1];
        return id;
      })
      return [...state, ...charactersIdList];

    default: 
      return state;
  }
}

// Main Reducer
const characters = combineReducers({
  byId,
  allIds
});

export default characters;

// Internal Selectors
const getAllCharacters = (state) => {
  return state.allIds.map(id => state.byId[id])
};

// Selectors
export const getVisibleCharacters = (state, filter) => {
  const allCharacters = getAllCharacters(state);
  return filter === 'all' ? allCharacters : allCharacters.filter(character => character.gender === filter)
}

export const getCharacter = (state, id) => {
  return state.byId[id];
}

