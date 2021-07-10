import { combineReducers } from 'redux';
import apiDataReducer from './dataReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  data: apiDataReducer,
  users: usersReducer,
});
