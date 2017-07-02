import { call, fork, all } from "redux-saga/effects";
// Sagas
import * as charactersSaga from "./characters.saga";

function* rootSaga() {
  yield call(charactersSaga.getCharacters);
}

export default rootSaga;
