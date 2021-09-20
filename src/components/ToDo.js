import React from 'react'

const ToDo = ({ task, complete, ind }) => {
  return (
    <div className={task.done ? "checked" : "unchecked"}>
        <div className='task-name'>
            {task.task}
        </div>
        <button className="completed" onClick={(e) => complete(e, ind)}>
                {task.done ? "✅" : "☑️"}
        </button>
    </div>
  )
}

export default ToDo