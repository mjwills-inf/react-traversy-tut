import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  
  
    render() {
    // destructing to assign variables for todo object properties (that we passed to Todoitem from Todo via props)
    const { id, title } = this.props.todo
    return (
      // can use inline style with doube curly and camel case        
        // <div style = {{ backgroundColor: '#f4f4f4' }}>
      
      // could also use a variable (set outside this class) with a single curly:        
        // const itemStyle = { backgroundColor: '#f4f4f4' }        
        // <div style = { itemStyle }>

      // here use funtion (as a method of this class - above) to get dynamic style based on data
      // below that is create input which (because no state management) is going to change data up chain of comps
        // to App where stored. as such will use method passed to it as a prop from Todo comp its called with 
      // .bind(this) needed and this.id (which is this.props.todo.id) is passed as arg
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange= { this.props.markComplete.bind(this, id) }/> 
          {' '} 
          { title }
          <button style={ this.btnStyle } onClick= {this.props.delete.bind(this, id) }>x</button>
        </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}
const btnStyle = () => {
  return {
    padding: '5px 10px',
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%'
  }
}


export default Todoitem
