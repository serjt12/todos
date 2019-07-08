import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import TodoList from './TodoList'
import CheckedList from './TodoList'
import { FaPowerOff } from 'react-icons/fa'

function Todos() {
  const [todoWarning, setTodoWarning] = useState(true)
  const [todoData, setTodoData] = useState( localStorage.todos ? JSON.parse(localStorage.todos) : [])
  const auth = localStorage.auth && localStorage.auth
  const doneTodos = todoData.filter(todo => !todo.done)
  const notDoneTodos = todoData.filter(todo => todo.done)

  function onLogout() {
    localStorage.clear()
    window.location.reload()
  }
  function onChange(e) {
    const { value } = e.target
    if(value === '') {
      setTodoWarning(false)
    }
    if(value !== '') {
      setTodoWarning(true)
    }
  }
  function onSubmit(e) {
    e.preventDefault()
    const todo = document.getElementById("todo").value
    if(todo === '') {
      setTodoWarning(false)
    }
    if(todo !== '') {
      setTodoWarning(true)
      const todoId = Math.random().toString(36).substr(2, 9)
      setTodoData([...todoData, {text: todo, id: todoId, done: false}])
      localStorage.setItem('todos', JSON.stringify([...todoData, {text: todo, id: todoId, done: false}]))
      document.getElementById("todo").value = ""
    }
  }
  function onDelete(id) {
    const newTodoData = todoData.filter(todo => todo.id !== id)
    setTodoData(newTodoData)
    localStorage.setItem('todos', JSON.stringify(newTodoData))
  }
  function onCheck(id) {
    var index = todoData.findIndex(todo => todo.id === id);
  if (index === -1) {
    console.log('no ha sido encontrado')
  }
  else{
    const newTodoData = [
      ...todoData.slice(0,index),
      Object.assign({}, todoData[index], {done: !todoData[index].done}),
      ...todoData.slice(index+1)]
    setTodoData(newTodoData)
    localStorage.setItem('todos', JSON.stringify(newTodoData))
  }}
  if (!auth) return <Redirect to='/' />
  return (
    <>
      <FaPowerOff className="logout" onClick={(e) => onLogout(e)} />
      <h1 style={{ color: 'white'}}>Comienza a programar tu dia!</h1>
      <form onSubmit={onSubmit}>
        <input className="todo-input" type="text" id="todo" placeholder="Ingresa tu tarea" onChange={(e) => onChange(e)} />
        <input type="button" value="Agregar" onClick={onSubmit}/>
        { !todoWarning && <span className='error'>Ingresa tu tarea!</span> }
      </form>
      <TodoList title='Por hacer:' todos={doneTodos} onCheck={onCheck} onDelete={onDelete} />
      <CheckedList title='Finalizadas:' todos={notDoneTodos} onCheck={onCheck} onDelete={onDelete} />
      <style scoped>{`
        .todo-input {
          width: initial;
        }
        .logout {
          margin: 10px;
          cursor: pointer;
          color: white;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}


export default Todos