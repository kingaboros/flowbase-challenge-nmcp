import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import rootReducer from '../redux/reducers/index';
import {
  getApiSaga,
  watchRegister,
  watchLogin,
  watchLogout,
} from '../redux/sagas/saga';

function* rootSaga() {
  yield spawn(getApiSaga);
  yield spawn(watchRegister);
  yield spawn(watchLogin);
  yield spawn(watchLogout);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
