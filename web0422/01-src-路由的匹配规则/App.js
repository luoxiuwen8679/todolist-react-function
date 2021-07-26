import React from 'react'
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default function App() {
  return (
    // BrowserRouter 帮我们监听路径的变化
    // HashRouter在路径(#/路径)发生变化之后, 刷新页面不会404
    // BrowserRouter 在发生变化之后,页面会404. 但是脚手架中帮我们处理了这次请求,所以目前代码不会有这个问题
    <BrowserRouter>
      <Link to="/home">home</Link>
      <Link to="/detail">Detail</Link>
      {/* Route 帮我们配置前端路由规则 */}
      {/* Route组件写在哪里,对应的视图(组件)就渲染到哪里 */}
      {/* pathname: /detail path: / */}
      <Route path="/" component={Home} exact></Route>
      {/* pathname: /detail path: /home */}
      <Route path="/home" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
    </BrowserRouter>

    // pathname 和 path:
    //  pathname指浏览器地址栏的路径
    //  path指Route组件的path属性的值

    // 默认路由: /
    // 路由匹配规则:

    // 模糊匹配(默认的匹配方式): pathname要以path开头(以/分级,一级一级去比较)

    // pathname: /home
    // pathname: /hometest
    // pathname: /home/a/b

    // path: /home
    // path: /

    // 精确匹配: pathname要和path一致
  )
}
