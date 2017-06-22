import { combineReducers } from 'redux';

// Sub Reducers
const byId = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      if(action.data){
        return {
          ...state,
          ...action.data.entities.characters
        }
      }
      return state;

    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      if(action.data){
        return [
          ...state, 
          ...action.data.result
        ];
      }
      return state;

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

