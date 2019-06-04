import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
	let input;

	const handleSubmit = e => {
		e.preventDefault();
	    if(!input.value.trim()) return;
	    dispatch(addTodo(input.value));
	    input.value = ""
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
	          <input type="text" className="form-control col-6 d-inline" ref={node => (input = node)} placeholder="Todo What?" />
	          <button type="submit" className="btn btn-primary ml-2">Add</button>
	        </form>
		</div>		
	)
}

export default connect()(AddTodo);