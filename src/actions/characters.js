import { normalize } from 'normalizr';
import * as schema from './schema';
import { CHARACTERS_REQUEST, CHARACTERS_REQUEST_SUCCESS, CHARACTERS_REQUEST_FAILURE } from '../constants/type';

// TODO
// This action will be dispatch directly by the saga. You have to move it
const receiveCharacters = data => {
  return {
    type: CHARACTERS_REQUEST_SUCCESS,
    data
  }
}

// TODO
// Remove this call to the API based on redux-thunk, instead it will be trigger inside the related saga
// Transform this thunk into a classic redux action
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
