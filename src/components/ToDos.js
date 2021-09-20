import React from 'react'

import ToDo from './ToDo'

class ToDos extends React.Component {
    state = {
        newTodo: '',
    }
  
    handleChange = e => {
      this.setState({
        newTodo: e.target.value
      })
    }
  
    render () {
      return (
        <div>
          <input onChange={this.handleChange}/>
            {this.props.tasks.map((task, idx) => 
          <ToDo task={task} key={idx} />
        )}
      </div>
    )
  }
}

export default ToDos