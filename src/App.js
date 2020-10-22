import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './layout/Header'
import AddTodo from './components/AddTodo'

import './App.css';



class App extends Component {
  // storing state in top level app to pass down to components (cuz no state management(?))
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Behave like a Grown Up',
        completed: false
      },
      {
        id: 3,
        title: 'Be peaceful',
        completed: false
      },
    ]
  }

  // setState method called on state -> .map returns new array of items to 'todos: ...'
    // new array of compare id and if so change to opposite value = ! (e.g. dummy logic)
  markComplete = (idArg) => {
    this.setState({ todos: this.state.todos.map(item => {
      if (item.id === idArg) {
        item.completed = !item.completed
      }
      return item;
    }) })
  }
  delete = (idArg) => {
    this.setState({ todos: [...this.state.todos.filter(item => item.id !== idArg)] });
  }
  addNewTodo = (title) => {
    console.log(title)
  }

  // render function JSK
  // props passed down to component
  // prop markcomplete passing App level method of marketComplete()
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo submitTodo={this.addNewTodo} />
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } delete={ this.delete }/>
        </div>
      </div>
    );
  }
}

export default App;
