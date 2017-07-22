import character from './character';

// TODO
// Sub Reducers
/*
const byId = (state={}, action) => {}
const allIds = (state = [], action) => {}
*/

// TODO
// Write 2 diffrents reducers and combine them to get the following shape
// Main Reducer
/*
const characters = combineReducers({
  byId,
  allIds
});

export default characters;
*/

export default (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      return [...state, ...action.data.map(item => {
        let act = {data: {...item}, type: action.type}
        return character(undefined, act);
      })];

    default:
      return state
  }
}

// TODO
// Add a new selector to retrieve a single character by it's id 
/*
export const getCharacter = (state, id) => {}
*/

// TODO
// Since the shape of the state will change, you have to update this selector too
export const getVisibleCharacters = (state, filter) => {
  return filter === 'all' ? state : state.filter(character => character.gender === filter)
}