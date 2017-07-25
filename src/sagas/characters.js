import { call, put } from "redux-saga/effects";
import { normalize } from 'normalizr';
import * as schema from './schema';
import { CHARACTERS_REQUEST_START, CHARACTERS_REQUEST_SUCCESS, CHARACTERS_REQUEST_FAILURE } from '../constants/type';
import apiFn from '../services/api';

export function* fetchCharacters(action){
  put({type: CHARACTERS_REQUEST_START});
  const {response, error} = yield call(apiFn, 'https://swapi.co/api/people/');
  if(response){
    const data = normalize(response, schema.arrayOfCharacters)
    yield put({type: CHARACTERS_REQUEST_SUCCESS, data});
  }else{
    yield put({type: CHARACTERS_REQUEST_FAILURE, error});
  }
}