import React from 'react'

function Task({ name, id,removeTask, completeTask,completed}) {
    return (
        <div class="flex">
            <h2 style={{color: completed ? "green" : "black", backgroundColor: completed ? "lightred" : "white"}} class="w-1/2">{name}</h2>
            <button class="w-1/2" onClick={() => { removeTask(id) }}>X</button>
            <button class="w-1/2" onClick={() => { completeTask(id) }}>Complete</button>
        </div>
    )
}

export default Task
