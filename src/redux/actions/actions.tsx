export const REQUEST_API_DATA_SAGA = 'REQUEST_API_DATA_SAGA';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const REGISTER_SAGA = 'REGISTER_SAGA';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SAGA = 'LOGIN_SAGA';
export const LOGOUT_SAGA = 'LOGOUT_SAGA';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const requestApiData = () => ({ type: REQUEST_API_DATA_SAGA });

export const receiveApiData = (data: any) => ({
  type: REQUEST_API_DATA,
  data,
});

export function signUp(
  name: string,
  email: string,
  pass: string,
  passConfirm: string
) {
  return {
    type: REGISTER_SAGA,
    payload: { name, email, pass, passConfirm },
  };
}
export function signupSuccess(email: string, password: string) {
  return {
    type: SIGN_UP_SUCCESS,
    result: { email, password },
  };
}

export function signupFailed(error: any) {
  return {
    type: SIGN_UP_FAILED,
    error,
  };
}

export function login(email: string, password: string) {
  return {
    type: LOGIN_SAGA,
    payload: { email, password },
  };
}

export function loginSuccess(payload: any) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailed(error: any) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

export function logOut(state: any) {
  return {
    type: LOGOUT_SAGA,
    payload: null,
  };
}

export function logOutSuccess(state: any) {
  return {
    type: LOGOUT_SUCCESS,
    payload: null,
  };
}

export function logOutFailed(state: any) {
  return {
    type: LOGOUT_FAILED,
    payload: null,
  };
}
