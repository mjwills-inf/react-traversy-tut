import React from 'react'

// export in declaring
export default function About() {
  return (
    // react fragment is container if you dont need an element in the DOM
    <React.Fragment>
      <h1>About</h1>
      <p>This is the todo list from Traversy React tutorial</p>
    </React.Fragment>
  )
}

