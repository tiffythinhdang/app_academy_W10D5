import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done
    };
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  doneHandler(e) {
    e.preventDefault();
    
    this.props.receiveTodo()
  }

  render() {
    return (
      <li>
        <div>{props.todo.title}</div>
        <div><button>{this.state.done ? "Undo" : "Done"}</button></div>
        <div><button onClick={this.deleteHandler}>Delete</button></div>
      </li>
    )
  };
}
export default TodoListItem;