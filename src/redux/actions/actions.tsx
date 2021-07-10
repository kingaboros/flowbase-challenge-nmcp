export const REQUEST_API_DATA_SAGA = 'REQUEST_API_DATA_SAGA';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';
export const REGISTER_SAGA = 'REGISTER_SAGA';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SAGA = 'LOGIN_SAGA';

export const requestApiData = () => ({ type: REQUEST_API_DATA_SAGA });

export const receiveApiData = (data: any) => ({
  type: REQUEST_API_DATA,
  data,
});

export function signupSuccess(email: string, password: string) {
  return {
    type: SIGN_UP_SUCCESS,
    result: { email, password },
  };
}

export function signupFailed(error: any) {
  return {
    type: AUTHENTICATION_FAILED,
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
