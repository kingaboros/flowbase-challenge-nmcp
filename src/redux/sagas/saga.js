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
  LOGOUT_SAGA,
  logOutSuccess,
  logOutFailed,
} from '../actions/actions';

import fetchData from '../../utils/api';

import { auth, firestore } from '../../utils/firebase';

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {}
}

function* signUp(action) {
  try {
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.pass
    );
    console.log(result);
    firestore
      .collection('users')
      .doc(result.user.uid)
      .set({ name: action.payload.name });

    yield put(signupSuccess(result));
  } catch (error) {
    console.log(error.message);
    yield put(signupFailed(error.message));
  }
}

const getUserDetails = async uid => {
  return await firestore.collection('users').doc(uid).get();
};
function* logIn(action) {
  try {
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.email,
      action.payload.password
    );
    const payload = yield call(getUserDetails, result.user.uid);
    console.log(payload.data());
    yield put(
      loginSuccess({
        uid: result.user.uid,
        name: payload.data().name,
        email: action.payload.email,
      })
    );
  } catch (error) {
    yield put(loginFailed(error.message));
  }
}

function* logOut(action) {
  try {
    const payload = yield call([auth, auth.logOut], action.payload);
    yield put(logOutSuccess(payload));
  } catch (error) {
    yield put(logOutFailed(error.message));
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

export function* watchLogout() {
  yield takeLatest(LOGOUT_SAGA, logOut);
}
