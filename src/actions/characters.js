import { normalize } from 'normalizr';
import * as schema from './schema';

const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
const receiveCharacters = data => {
  return {
    type: RECEIVE_CHARACTERS,
    data
  }
}

export const fetchCharacters= () => {
  return function (dispatch) {
    return fetch('https://swapi.co/api/people/')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log('normalized response',
          normalize(data.results, schema.arrayOfCharacters)
        )
        dispatch(receiveCharacters(data.results));
      }).catch(err => {
        console.log(err);
      });
  }
}

// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// export const setVisibilityFilter = visibilityFilter => {
//   return {
//     type: SET_VISIBILITY_FILTER,
//     visibilityFilter
//   }
// }

// export const RECEIVE_CHARACTER_DETAILS = "RECEIVE_CHARACTER_DETAILS";
// const receiveCharacterDetails = data => ({
//   type: RECEIVE_CHARACTER_DETAILS,
//   data
// })

// export const fetchCharacterDetails = (characterId) => {
//   return function (dispatch) {
//     return fetch(`https://swapi.co/api/people/${characterId}`)
//     .then(response => {
//       return response.json();
//     }).then(data => {
//       dispatch(receiveCharacterDetails(data));
//     }).catch(err => {
//       console.log(err);
//     });
//   }
// }
