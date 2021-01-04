import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from './store/sagas/updateCompany';

// then run the saga

const sagaMiddleware = createSagaMiddleware()



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);