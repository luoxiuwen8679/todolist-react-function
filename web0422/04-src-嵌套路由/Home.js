import React from 'react'
import { Link, Route } from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
export default function Home(props) {
  // console.log(props)
  return (
    <div>
      <Link to="/home/item1">item1</Link>
      <Link to="/home/item2">item2</Link>
      {/* pathname: /home/item1 */}
      {/* 嵌套路由: 在写2级路由的时候,把一级路由的路径,拼接在前面 */}
      <Route path="/home/item1" component={Item1}></Route>
      <Route path="/home/item2" component={Item2}></Route>
    </div>
  )
}
