import React, { Component } from 'react';

export default class Todo extends Component {
	constructor() {
    super();
    this.state = {
      todo: "",
      todos: ["Learning ReactJS", "Learning Redux", "Learning JS"]
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.todo === "") {
      alert("Enter todo task");
      return;
    }
    this.setState({todos: [...this.state.todos, this.state.todo ], todo: ""});
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value })
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return <li key={index}>{todo}</li>
    });
    
    return (
      <div>
        <h1>No Redux</h1>
        <form>
          <input type="text" className="form-control col-6 d-inline" id="todo" value={this.state.todo} onChange={ this.handleChange } placeholder="Todo What?" />
          <input type="submit" className="btn btn-primary ml-2" value="Add" onClick={this.handleSubmit}/>
        </form>
        <h3 className="text-left ml-2 mt-2">Todo List: </h3>
        <ul className="mt-2">
          {todoList}
        </ul>
      </div>
    );
  }
}