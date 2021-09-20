import React from 'react'

import ToDo from './ToDo'

class ToDos extends React.Component {
    state = {
        newTodo: '',
        toDos: this.props.tasks
    }
  
    handleChange = e => {
      this.setState({
        newTodo: e.target.value
      })
    }

    addTask = () => {
        let newTask = {task: this.state.newTodo, done: false}
        let addedTodosArr = [...this.state.toDos, newTask]
        this.setState({
            toDos: addedTodosArr
        })
    }

    markCompleted = (e, idx) => {
        // find task we have completed
        let completedTask = this.state.toDos.find((elem, index) => {
            if (idx === index) {
                return true
            }
        })
        // update task completed to true
        completedTask.done = true
        // create new array of tasks with completed task replacing previous task
        let updatedTasks = [...this.state.toDos]
        updatedTasks[idx] = completedTask
        // update state of tasks with updatedTasks array
        this.setState({
            toDos: updatedTasks
        })
    }
  
    render () {
      return (
        <div>
          <input onChange={this.handleChange}/>
            {this.state.toDos.map((task, idx) => 
          <ToDo task={task} key={idx} ind={idx} complete={this.markCompleted} />
        )}
          <button className="addTask" onClick={this.addTask}>Add Task</button>
      </div>
    )
  }
}

export default ToDos