import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_API_DATA_SAGA,
  receiveApiData,
  LOGIN_SAGA,
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  REGISTER_SAGA,
} from '../actions/actions';

import fetchData from '../../utils/api';

import { auth } from '../../utils/firebase';

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* signUp(action) {
  try {
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.password
    );
    console.log(result);

    yield put(signupSuccess(result));
  } catch (error) {
    yield put(signupFailed(error));
  }
}

function* logIn(action) {
  try {
    console.log(action);
    const payload = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.email,
      action.payload.password
    );
    console.log(payload);
    yield put(loginSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(loginFailed(error.message));
  }
}

export function* getApiSaga() {
  yield takeLatest(REQUEST_API_DATA_SAGA, getApiData);
}
export function* watchRegister() {
  yield takeLatest(REGISTER_SAGA, signUp);
}

export function* watchLogin() {
  yield takeLatest(LOGIN_SAGA, logIn);
}
