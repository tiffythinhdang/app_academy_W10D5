import { RECEIVE_STEPS } from '../actions/step_actions';
import { RECEIVE_STEP } from '../actions/step_actions';
import { REMOVE_STEP } from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: "buy soap",
    done: true,
    todo_id: 1
  },
  2: {
    id: 2,
    title: "use soap",
    done: false,
    todo_id: 1
  }
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;

    case RECEIVE_STEP:
      newState = Object.assign({}, state);
      newState[action.step.id] = action.step;
      return newState;

    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;

    default:
      return state;
  }
};

export default stepsReducer;