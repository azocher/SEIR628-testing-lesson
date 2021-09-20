import React from 'react'

const ToDo = ({ task }) => {
  return (
    <div>
      <div className='task-name'>{task.task}</div>
    </div>
  )
}

export default ToDo