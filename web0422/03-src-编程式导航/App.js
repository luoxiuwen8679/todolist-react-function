import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Test from './Test'
export default function App() {
  // 小结:

  // history:
  // push('/路径', 要传递的数据) 添加历史记录
  // replace('/路径', 要传递的数据) 替换历史记录
  // location:
  // state 获取push/replace传递的数据
  // match:
  // params: 获取路由参数
  // 配置路由参数: 在Route中的path属性里面配置,配置方法和node中后端路由参数配置是一样的
  // 传递路由参数: <Link to="/路径/参数"></Link> 或 push/replace('/路径/参数')

  return (
    <div>
      <Link to="/detail/2">detail</Link>
      {/* 只要是被Route管理的组件,就可以通过props获取到history,location和match三个对象 */}
      <Route path="/" component={Home} exact></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/detail/:id?" component={Detail}></Route>
      <Test></Test>
    </div>
  )
}
