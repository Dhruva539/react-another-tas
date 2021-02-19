import { all, call } from "redux-saga/effects";
import authentication from "./authentication.saga";
import user from "./user.saga";

export function* rootSaga() {
  try {
    yield all([call(authentication), call(user)]);
  } catch (error) {
    console.error(error);
  }
}
