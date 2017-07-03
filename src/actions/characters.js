import { normalize } from 'normalizr';
import * as schema from './schema';
import { CHARACTERS_REQUEST, CHARACTERS_REQUEST_SUCCESS, CHARACTERS_REQUEST_FAILURE } from '../constants/type';

const receiveCharacters = data => {
  return {
    type: CHARACTERS_REQUEST_SUCCESS,
    data
  }
}

export const fetchCharacters= () => {
  return function (dispatch) {
    dispatch({type: CHARACTERS_REQUEST});
    return fetch('https://swapi.co/api/people/')
      .then(response => {
        return response.json();
      }).then(data => {
        dispatch(receiveCharacters(normalize(data.results, schema.arrayOfCharacters)));
      }).catch(err => {
        dispatch({type: CHARACTERS_REQUEST_FAILURE});
      });
  }
}
