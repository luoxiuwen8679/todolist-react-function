import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/home" activeClassName="selected">
        home
      </NavLink>
      <NavLink to="/detail" activeClassName="selected">
        Detail
      </NavLink>

      <Route path="/home" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>

      {/* Switch用来包裹Route组件, 被Switch包裹的Route,前面的匹配成功,后面的就不再匹配了 */}
      {/* <Switch>
        
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/" component={Home}></Route>
      </Switch> */}
      {/* pathname: /home */}
      {/* <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route> */}
      {/* 执行到redirect, to属性的值,直接用来修改地址栏路径 */}
      {/* from属性要和Switch配合使用,才有意义。 否则不会有指定效果 */}
      {/* <Redirect from="/test" to="/home"></Redirect>
      </Switch> */}
    </BrowserRouter>
  )
}
