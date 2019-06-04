const todos = (state = ["Create Todo app", "Use Redux"], action ) => {
	switch (action.type) {
		case 'ADD_TODO':
			console.log(action);
			return [...state, action.text];
		default: 
			console.log(action.type)
			return state
	}
}

export default todos