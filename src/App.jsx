import { useState, useEffect } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"
function App() {

const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('') 

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos: newList}))
}

function hanndleAddTodos(newTodo){
    const newTodList = [...todos, newTodo]
    persistData(newTodList)
    setTodos(newTodList)

}

function handleDeleteTodo(index){
  const newTodList = todos.filter((todos, todoIndex)=>{
    return todoIndex !== index;
  })
  persistData(newTodList)
  setTodos(newTodList);
}
function editTodo(index){
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
}

useEffect(() => {
  if(!localStorage){
    return
  }
  let localTodo = localStorage.getItem('todos')
  if(!localTodo){
    return
  }
  localTodo = JSON.parse(localTodo).todos
  setTodos(localTodo)
},[])

  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} hanndleAddTodos={hanndleAddTodos}/>
      <TodoList editTodo = {editTodo} handleDeleteTodo = {handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
