// const initState = [
// 	{ id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
// 	{ id: 2, name: "Learn React", completed: false, priority: "High" },
// 	{ id: 3, name: "Learn English", completed: true, priority: "Low" },
// ];

import { loadState } from "../../utils/localStorage";

const initState = loadState();

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "todoList/editTodoName":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    case "todoList/removeTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoListReducer;
