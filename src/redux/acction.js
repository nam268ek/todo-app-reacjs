import * as actionTypes from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { todo },
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
export const updateTodo = (id, title) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: { id, title },
  };
};
