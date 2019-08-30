import React from 'react';

import TodoListContainer from './todos/todo_list_container';


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>todooz</h1>
        <TodoListContainer />
      </div>
    );
  }
}