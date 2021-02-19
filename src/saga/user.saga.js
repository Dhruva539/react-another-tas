import { call, put, takeEvery, select } from "redux-saga/effects";
import { USERDETAILS_FETCH_REQUEST } from "../actions/actionTypes";
import { getUserDetails } from "../services/user.service";
function* fetchUserDetails({ payload: { params } }) {
  const result = yield call(getUserDetails);
  console.log(result);
}

/**
 *  Watcher Subscribes to FETCH_REQUEST actions
 */

export function* watchSaga() {
  try {
    yield takeEvery(USERDETAILS_FETCH_REQUEST, fetchUserDetails);
  } catch (e) {
    console.error("USER SAGA Error", e);
  }
}
export default watchSaga;
