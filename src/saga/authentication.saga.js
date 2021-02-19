import { call, put, takeEvery, select } from "redux-saga/effects";
import { LOGIN_FETCH_REQUEST } from "../actions/actionTypes";
import { callLoginApi } from "../services/authentication.services";
function* userLogin({ payload: { params } }) {
  let result = yield call(callLoginApi);
  console.log(result);
}

/**
 *  Watcher Subscribes to FETCH_REQUEST actions
 */

export function* watchSaga() {
  try {
    yield takeEvery(LOGIN_FETCH_REQUEST, userLogin);
  } catch (e) {
    console.error("AUTHENTICATION SAGA Error", e);
  }
}
export default watchSaga;
