
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
    const nextTodo = [
          ...todoList,
          {id: nextId++, task: todo,}
        ];

        setTodoList(nextTodo)
        setTodo("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button type='submit'>add</button>
      </form>
     
        <ul>
          {todoList.map(todos => (
            <li key={todos.id}>{todos.id} {todos.task}</li>
            ))}
        </ul>

    </>
)}

