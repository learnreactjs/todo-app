import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} text={todo} />
    ))}
  </ul>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)