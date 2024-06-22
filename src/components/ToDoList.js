import React from 'react'
import { useState } from 'react'
import Task from './Task';

function ToDoList() {

    const [newTask, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);


    const addTask = () => {
        const task = {
            'id': todoList.length === 0 ? 1: todoList[todoList.length - 1].id + 1,
            "name": newTask,
            completed: false
        }
        setTodoList([...todoList, task]);

        setTask("");
    }
    const removeTask = (id) =>
    {
        setTodoList(todoList.filter((task) => task.id !== id))
    }
    const completeTask = (id) =>
    {
       setTodoList(
           todoList.map((task) =>
           {
               if(task.id === id)
               {
                   return {...task, completed : true}
               }
               return task
           })
       )
        
    }
    return (
        <div>
            <div className='addTask'>
                <input value={newTask} type='text' onChange={(e) => setTask(e.target.value)} />
                <button disabled={newTask === ""} onClick={addTask}>Add</button>
            </div>
            <div className='todoList'>
                <ul>
                    {todoList.map((task) => (
                        <>
                            <Task name={task.name} id={task.id} removeTask={removeTask} completeTask={completeTask} completed={task.completed}></Task>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList
