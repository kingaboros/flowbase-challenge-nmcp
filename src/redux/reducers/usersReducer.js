import {
  SIGN_UP_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../actions/actions';

const initialState = {
  user: '',
  login: '',
  error: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, user: action.user };
    case AUTHENTICATION_FAILED:
      return { ...state, error: action.error };
    case LOGIN_SUCCESS:
      return { ...state, login: action.user };
    case LOGIN_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default usersReducer;
