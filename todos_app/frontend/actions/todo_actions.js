export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export { receiveTodos, receiveTodo, removeTodo };