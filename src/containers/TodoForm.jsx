import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			todo: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.id]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.todo === "") return;
		this.props.addTodo(this.state.todo);
		this.setState({todo: ""});
	}

	render() {
		return (
			<div>
				<form>
		          <input 
		          	type="text" 
		          	className="form-control col-6 d-inline"
		          	id="todo" 
		          	value={this.state.todo}
		          	onChange={this.handleChange}
		          	placeholder="Todo What?" 
		          />
		          <button type="submit" className="btn btn-primary ml-2" onClick={this.handleSubmit}>Add</button>
		        </form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTodo : todo => dispatch(addTodo(todo))
	}
}

export default connect(null, mapDispatchToProps)(TodoForm);