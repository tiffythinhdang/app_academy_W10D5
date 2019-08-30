import React from 'react';
import { uniqueId } from '../todos/util';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
    let step = {
      id: uniqueId(),
      title: this.state.title,
      done: false,
      todo_id: this.props.todo_id
    };
    console.log(step);
    this.props.receiveStep(step);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Create new step" />
        </form>
      </div>
    );
  }
}

export default StepForm;