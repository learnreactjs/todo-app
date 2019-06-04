import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todo: "",
      todos: ["Learning ReactJS", "Learning Redux", "Learning JS"]
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({todos: [...this.state.todos, this.state.todo ], todo: ""});
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({todo: e.target.value })
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return <li key={index}>{todo}</li>
    });
    return (
      <div className="App">
        <form>
          <input type="text" value={this.state.todo} onChange={ this.handleChange } placeholder="Todo What?" />
          <input type="submit" value="Add" onClick={this.handleSubmit}/>
        </form>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

export default App;
