export const loadState = () => {
	try {
	const serialState = localStorage.getItem('appState');
	if (serialState === null) {
		return [];
	}
  const state = JSON.parse(serialState);
	return state?.todos ?? [];
	} catch (err) {
	return [];
	}
};

export const saveState = (state) => {
	try {
	const serialState = JSON.stringify(state); // {todos: []}
	localStorage.setItem('appState', serialState);
	} catch(err) {
		console.log(err);
	}
};
