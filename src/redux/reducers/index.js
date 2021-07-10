import { combineReducers } from 'redux';
import apiDataReducer from './dataReducer';

import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  data: apiDataReducer,
  firebase: firebaseReducer,
});
