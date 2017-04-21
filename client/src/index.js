import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
// router decides what to show in the screen while browserHistory it's an object that tells
// react-router how to interpret changes to the url
import reducers from './reducers';
import routes from './routes';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
