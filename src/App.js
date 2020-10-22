import React, { Component } from 'react';
//renaming import to Router alias below (easier name to write)
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/pages/About'

import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import axios from 'axios'

import './App.css';



class App extends Component {
  // storing state in top level app to pass down to components (cuz no state management(?))
  state = {
    todos: []
  }

  // axios used instead of fetch API here. setting state to data from json fetch
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
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

  // just deletes from this.state but real use would send delete to database
  // like example below but below is in fact wrong
    // delete (id) => {
    //   axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
    //   .then(res=> this.setState({
    //     todos: [...this.state.todos, res.data]
    //   }
    // })}
  delete = (idArg) => {
    this.setState({ todos: [...this.state.todos.filter(item => item.id !== idArg)] });
  }
  
  // dummy function to post back to JSON database with axios on adding new todo
  // successful response from database adds the todo to this.state.todos
  addNewTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res=> this.setState({
      todos: [...this.state.todos, res.data]
    }))
    
  }

  // render function JSK
  // props passed down to component
  // prop markcomplete passing App level method of marketComplete()
  render() {
    return (
      // to use router must wrap everything inside BrowserRouter (alias Route)
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* creating a route below with / home path */}
            {/* make exact so /about doesnt display / (home) content */}
            <Route path="/" exact render={props => (
              // Fragment used as JSX needs everything in single wrapped tag
              <React.Fragment>
                <AddTodo submitTodo={this.addNewTodo} />
                <Todos todos={ this.state.todos } markComplete={ this.markComplete } delete={ this.delete }/>
              </React.Fragment>
            )} />
            <Route path ="/about" component={About}/>           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
