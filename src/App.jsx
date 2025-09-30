
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
  
  function handleclick(){
    const nextTodo = [
          ...todoList,
          {id: nextId++, task: todo,}
        ];

        setTodoList(nextTodo)
  }

  return (
    <>
      
        <input type="text" value={todo} onChange={e=> setTodo(e.target.value)} />
        <button onClick={(handleclick)}>add</button>
     
        <ul>
          {todoList.map(todos => (
            <li key={todos.id}>{todos.id} {todos.task}</li>
          ))}
        </ul>

    </>
)}

