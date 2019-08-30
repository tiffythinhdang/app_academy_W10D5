

export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map((key) => {
    return state.todos[key];
  });
};

export const stepsByTodoId = (state, todoId) => {
  let keys = Object.keys(state.steps);
  let steps = keys.map((key) => {
    return state.steps[key];
  });
  return steps.filter((step) => {
    return step.todo_id === todoId;
  });
};