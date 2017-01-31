import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from '../containers/DevTools';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import app from '../reducers/index'; // The main reducer
import {setDefaults} from './setDefaults';

const reducer = combineReducers({                               // Used to combine reducers. Best practice is to have only one reducer in store. See: http://redux.js.org/docs/api/createStore.html#tips 
  app,
  routing: routerReducer                                        // Used if react-router-redux is applied to get routes in state
});
const store = createStore(
  reducer,
  compose(                                                      // Using compose to add more than one store enhancer, e.g. thunks
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )
)
const history = syncHistoryWithStore(browserHistory, store);    // Used when react-router-redux is applied to get routes in state

/*store.subscribe(() => {
  console.log('store.getState() ', store.getState());
});*/

// Set app defaults
setDefaults(store);

export default function configureStore() {
    return store;
};



