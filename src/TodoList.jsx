import React from 'react'
import './TodoList.css'
import {useState} from 'react'

function TodoList() {
  const[todo,setTodo] =useState(['sample task'])
  const[newTodo,setNewTodo] = useState("")

  const addNewTask = ()=>{
    setTodo([...todo,newTodo])
    setNewTodo('')
  };


  const updateHandler = (e)=>{
    setNewTodo(e.target.value)
  };

  const delateTodo = (index)=>{
    const copyTodo = [...todo]
    copyTodo.splice(index,1)
    setTodo(copyTodo)
  };


  return (
    <div className='todolist'>
      <div className='todo'>
        <div className='input'>
         <input className='text' type="text" placeholder='enter a task' value={newTodo} onChange={updateHandler}/>
         <button onClick={addNewTask}>add</button>
        </div>

        <h4>Task List</h4>
        <ul>
          {todo.map((el,index)=>{
            return <li key={index}>
              <span>{el}</span>
              <button onClick={delateTodo}>Delate</button>
              </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
