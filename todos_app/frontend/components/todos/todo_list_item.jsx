import React from 'react';

import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
      detail: false
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.removeTodo(this.state.todo);
  }

  toggleDone(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    newState.todo.done = !newState.todo.done;

    this.props.receiveTodo(newState.todo);
    this.setState(newState);
  }

  toggleDetails(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }


  render() {
    return (
      <li>
        <div>{this.props.todo.title}</div>
        <div><button onClick={this.toggleDetails}>{this.state.detail ? "Hide" : "Show"} Details</button></div>
        <div><button onClick={this.toggleDone}>{this.state.todo.done ? "Undo" : "Done"}</button></div>
        {this.state.detail ? <TodoDetailViewContainer todo={this.state.todo} /> : ""}
      </li>
    )
  };
}
export default TodoListItem;