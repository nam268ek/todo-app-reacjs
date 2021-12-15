import * as actionTypes from "./actionTypes";

export const addTodo = (title) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { title },
  };
};
export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: { id },
  };
};
export const editTodo = (id) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: { id },
  };
};
export const completeTodo = (id) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: { id },
  };
};
export const updateTodo = (id, key) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: { id, key },
  };
};
