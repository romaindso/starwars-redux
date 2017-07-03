import { takeEvery } from "redux-saga/effects";
import { CHARACTERS_REQUEST } from '../constants/type';
// Sagas
import * as charactersSaga from "./characters";

function* rootSaga() {
  yield takeEvery(CHARACTERS_REQUEST, charactersSaga.fetchCharacters)
}

export default rootSaga;