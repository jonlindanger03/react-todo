
import { useState } from 'react';
import './App.css'

export default function App() {

  return (
    <>
      <MyForm/>
    </>
  )
}

let nextId = 0;

function MyForm(){
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let trimedTodo = todo.trim()
    if (trimedTodo !="") {
    const nextTodo = [
          ...todoList,
          {id: nextId++, task: todo,}
        ];

        setTodoList(nextTodo)
      }
      setTodo("")
      return
  }

  return (
    <>
    <div className='card'>

      <form className='form' onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button type='submit'>add</button>
      </form>
     
        <ul className='list'>
          {todoList.map(todos => (
            <li className='list-item' key={todos.id}> 
            <input type="checkbox" />
            {todos.task}
            <button
            onClick={() => {setTodoList(
              todoList.filter(t => t.id !== todos.id) 
              )}}>
              delete
            </button>
            </li>
            ))}
        </ul>

    </div>
    </>
)}

