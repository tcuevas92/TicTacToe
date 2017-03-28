import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './Container/App';
import GameReducer from './Reducer/GameReducer';
import './index.css';

import * as ActionCreator from './Action/ActionCreator';

let store = createStore(GameReducer);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(ActionCreator.MoveTaken('X', 0, 0));
store.dispatch(ActionCreator.MoveTaken('O', 1, 1));

// Stop listening to state updates
unsubscribe()

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
