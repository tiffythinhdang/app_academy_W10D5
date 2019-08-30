import React from 'react';
import { uniqueId } from './util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newState = Object.assign({}, this.state);
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    console.log(todo);
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
          </label>

          <label>
            Body
            <textarea onChange={this.handleChange} id="body" value={this.state.body}></textarea>
          </label>

          <input type="submit" value="Create new todo"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;