import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';


class App extends Component {
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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
