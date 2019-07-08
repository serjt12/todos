import React, { Fragment } from 'react'
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa'

export default function TodoList(props) {
  const {todos, onDelete, onCheck, title}= props
  return (
    <ul>
    { todos.length > 0 && <h1 style={{ color: 'white'}}>{title}</h1>}
      {todos.map(({text, id, done}) => (
        <Fragment key={id}>
          <li className={`fade-in ${done ? 'checked' : ''}`}>
          <span>{text}</span>
          <FaRegTimesCircle className="close" onClick={() =>onDelete(id)} />
          <FaRegCheckCircle className="check" onClick={() =>onCheck(id)}  />
          </li>
        </Fragment>
      ))}
      <style scoped>{`
        span {
          padding: 10px;
        }
        .checked {
          text-decoration: line-through;
          color: red;
        }
        .close {
          color: red;
          float: right;
          cursor: pointer; 
        }
        .check {
          float: right;
          color: green;
          margin-right: 6px;
        }
        .fade-in {
          animation: fade 1s;
        }
        @keyframes fade {
          0% {
              opacity: 0.6;
          }
          5%{
              opacity: 0.3;
          }
          100%{
              opacity: 1;
          }
        }
      `}</style>
    </ul>
  )
}
