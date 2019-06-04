const todos = (state = ["Create Todo app", "Use Redux"], action ) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, action.text];
		default: 
			return state
	}
}

export default todos