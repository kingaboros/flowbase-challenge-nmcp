import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import reducer from './reducers/dataReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mySaga from '../src/sagas/saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
