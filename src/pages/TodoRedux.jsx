import React from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';

export default function Redux() {
	return (
		<div>
			<h1>With Redux</h1>
			<TodoForm />
	        <h3 className="text-left ml-2 mt-2">Todo List: </h3>
	        <TodoList />
		</div>
		);
}