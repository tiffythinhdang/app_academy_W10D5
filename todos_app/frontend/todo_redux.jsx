import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import Root from "./components/root";

//--testing--//
import rootReducer from './reducers/root_reducer';
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';
import { allTodos } from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, content);

  //--testing--//
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.rootReducer = rootReducer;
  window.allTodos = allTodos;
});