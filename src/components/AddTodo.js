import React, { Component } from 'react'

export class AddTodo extends Component {
  // example of component state (does not exist across /is not passed)
  state = {
    title: '',
    
  }
  titleChange = (e) => {
    // below could also read ({[e.target.name]: e.target.value}) (computed property name)
      // which would be able to do all state that match input names with single function
    this.setState({title: e.target.value})
    
  }

  submitTodo = (e) => {
    // call prop function passed in from App
    e.preventDefault()
    this.props.submitTodo(this.state.title)
    this.setState({title: ''})
  }

  render() {
    return (
      <form 
        style={{display: "flex"}}           
        onSubmit={this.submitTodo}  
      >
        <input 
          type="text" 
          name="title" 
          placeholder ="Add Todo..." 
          style={{flex: '10', padding: "5px"}}
          value={this.state.title}
          onChange={this.titleChange}
          />
        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{flex:'1'}}
        />
      </form>
    )
  }
}

export default AddTodo
