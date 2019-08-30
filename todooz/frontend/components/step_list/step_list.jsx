import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = (props) => {
  return (
    <div>
      <ul>
        {props.steps.map((step) => {
          return <StepListItemContainer
            step={step}
            key={step.id}
            receiveStep={props.receiveStep}
          />
        })}
      </ul>
      <StepForm receiveStep={props.receiveStep} todo_id={props.todo_id} />
    </div>
  )
};

export default StepList;