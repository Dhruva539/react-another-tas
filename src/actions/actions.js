import { createApiActions } from "../util/api";
import actionCreator from "../util/createAction";
import {
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_FAIL,
  USERDETAILS_FETCH_REQUEST,
  USERDETAILS_FETCH_SUCCESS,
  USERDETAILS_FETCH_FAILURE
} from "../actions/actionTypes";

//create Standard API Actions (Request,fail,success)

export const loginApiActions = createApiActions(
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_FAIL,
  LOGIN_FETCH_SUCCESS
);
export const userApiActions = createApiActions(
  USERDETAILS_FETCH_REQUEST,
  USERDETAILS_FETCH_SUCCESS,
  USERDETAILS_FETCH_FAILURE
);
