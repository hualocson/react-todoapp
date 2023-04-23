import { createSelector } from "reselect";
// export const todoListSelector = (state) => {
// 	const searchText = searchTextSelector(state);
// 	const todosRemaining = state.todoList.filter((todo) => {
// 		return todo.name.includes(searchText);
// 	});
// 	return todosRemaining;
// };
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const filterStatusSelector = (state) => state.filters.status;

// add reselect to write selector
export const todoRemainingSelector = createSelector(
	todoListSelector,
	searchTextSelector,
	filterStatusSelector,
	filterPrioritiesSelector,
	(todoList, searchText, status, priorities) => {
		// status => All, Completed, To do
		return todoList.filter((todo) => {
			if (status === "All")
				return priorities.length
					? todo.name.includes(searchText) && priorities.includes(todo.priority)
					: todo.name.includes(searchText);
			return (
				todo.name.includes(searchText) &&
				(status === "Completed" ? todo.completed : !todo.completed) &&
				(priorities.length ? priorities.includes(todo.priority) : true)
			);
		});
	}
);
