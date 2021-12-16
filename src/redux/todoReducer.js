import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, action.payload.todo],
      };
    case DELETE_TODO:
      return {
        todo: state.todo.filter((item) => item.id !== action.payload.id),
      };
    case EDIT_TODO:
      return {
        todo: state.todo.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isEdit: true,
            };
          }
          return item;
        }),
      };
    case COMPLETE_TODO:
      return {
        todo: state.todo.map((item) => {
          if (item.id === action.payload.id) {
            item.isDone = !item.isDone;
          }
          return item;
        }),
      };
    case UPDATE_TODO:
      return {
        todo: state.todo.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
export default todoReducer;
