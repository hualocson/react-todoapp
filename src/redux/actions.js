export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const editTodoName = (data) => {
  return {
    type: "todoList/editTodoName",
    payload: data,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: "todoList/removeTodo",
    payload: todoId,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filter/prioritiesFilterChange",
    payload: priorities,
  };
};
// action creators => function
