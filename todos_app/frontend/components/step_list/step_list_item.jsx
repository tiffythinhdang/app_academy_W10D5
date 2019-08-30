import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step,
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.removeStep(this.state.step);
  }

  toggleDone(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    newState.step.done = !newState.step.done;

    this.props.receiveStep(newState.step);
    this.setState(newState);
  }


  render() {
    return (
      <li>
        <div>{this.props.step.title}</div>
        <div><button onClick={this.toggleDone}>{this.state.step.done ? "Undo" : "Done"}</button></div>
        <div><button onClick={this.deleteHandler}>Delete</button></div>
      </li>
    )
  };
}
export default StepListItem;