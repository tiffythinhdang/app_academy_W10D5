import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.removeTodo(this.state.todo);
  }

  render() {
    return (
      <div>
        <p>{this.props.todo.body}</p>
          <StepListContainer todoId={this.props.todo.id}/>
        <div><button onClick={this.deleteHandler}>Delete</button></div>
      </div>
    )
  }
}

export default TodoDetailView;