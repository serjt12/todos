import React from 'react'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import Todos from './Todos'

 function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path="/todos" component={Todos} />
    </Switch>
  )
}

export default Main