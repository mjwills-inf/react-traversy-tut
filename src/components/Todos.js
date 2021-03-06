import React, { Component } from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types'


class Todos extends Component {

  render() {
    // return a TodoItem for each array index in todo props (via map)
    // pass as prop (calling it todo) to todoItem the todo object from array (i.e. item from map)
    // set key from todo object property (from array via map)
    return this.props.todos.map((item) => (
      <TodoItem key= { item.id } todo = { item } markComplete={ this.props.markComplete }
      delete= { this.props.delete }/>
    ))
  }
};

// proptypes serve as vildation(?) check for props
  // the prop passed to Todos component includes an array called todos
  // the prop passed to Todos comp  includes a function called markComplete
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
}

export default Todos;