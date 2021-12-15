import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

const initialState = {
  todo: [],
  todoRef: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: Date.now(),
            title: action.payload.title,
            isEdit: true,
            isDone: false,
          },
        ],
        todoref: [
          ...state.todo,
          {
            id: Date.now(),
            title: action.payload.title,
            isEdit: true,
            isDone: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: [...state.todo].filter((item) => item.id !== action.payload.id),
        todoRef: [...state.todo].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case EDIT_TODO:
      const data = [...state.todo];
      const index = data.findIndex((item) => item.id === action.payload.id);
      data[index].isEdit = !data[index].isEdit;
      return {
        ...state,
        todo: data,
        todoRef: data,
      };
    case COMPLETE_TODO:
      const dataC = [...state.todo];
      const indexC = dataC.findIndex((item) => item.id === action.payload.id);
      dataC[indexC].isDone = !dataC[indexC].isDone;
      return {
        ...state,
        todo: dataC,
        todoRef: dataC,
      };
    case UPDATE_TODO:
      console.log(action.payload);
      const dataU = [...state.todo];
      const indexU = dataU.findIndex((item) => item.id === action.payload.id);
      dataU[indexU][action.payload.key] = action.payload.key;
      return {
        ...state,
        todo: dataU,
        todoRef: dataU,
      };
    default:
      return state;
  }
};
export default todoReducer;