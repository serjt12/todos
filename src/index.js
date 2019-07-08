import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './components/App'

ReactDOM.render(
<Router>
  <App />
  <style>{`
    ul {
      padding: 0px;
      align-self: center;
    }
    li {
      display: block;
      margin: 20px auto;
      background: white;
      padding: 5px 10px;
      font-size:20px;        
      text-align:center;
      border: 3px solid lightblue;
      outline:none;
      color:gray;
      transition: 0.90s;
      border-radius:20px;
    }
    .error {
      color: red;
    }
    input {
      display: block;
      margin: 20px auto;
      background: transparent;
      padding: 5px 10px;
      font-size:20px;
      width: 180px;    
      text-align:center;
      border: 3px solid lightblue;
      outline:none;
      color:#fff;
      transition: 0.90s;
      border-radius:20px;
    }
    input:focus {
      transition:900ms;
      font-size:20px;
      width: 250px;
      transform: scale(1.1);
      border: 3px solid lightyellow;
    }
    body {
      margin: 0;
      padding: 0;
      background: #252525;
      font-family: sans-serif;
    }
  `}</style>
</Router>
, document.getElementById('root'))