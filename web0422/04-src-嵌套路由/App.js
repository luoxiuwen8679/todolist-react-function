import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default function App() {
  return (
    <div>
      <NavLink to="/home">home</NavLink>
      <br />
      <br />
      <NavLink to="/detail">detail</NavLink>
      <hr />
      <br />
      {/* pathname: /home/item1 */}
      <Route path="/home" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
    </div>
  )
}
