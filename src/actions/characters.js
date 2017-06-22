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
        dispatch(receiveCharacters(normalize(data.results, schema.arrayOfCharacters)));
      }).catch(err => {
        console.log(err);
      });
  }
}
