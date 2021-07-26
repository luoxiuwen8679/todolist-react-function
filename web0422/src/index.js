// import React from 'react'
// import ReactDOM from 'react-dom'

// //写了修改数据的代码

// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

// 注意: redux是独立的.写在这儿,只是为了可以使用es6模块化语法,目前代码跟react一点关系都没有
import { createStore } from 'redux'
// 1. 定义reducer函数
// 给state添加默认值,就可以初始化store中state的值

let initState = {
  count: 0,
}
// reducer函数在创建store的时候,会被调用一次.目的是为了初始化数据
// 当执行了store.dispatch(需求对象) reducer会再次被调用.为了修改数据
function reducer(state = initState, action) {
  //   console.log('reducer被调用了', state, action)
  // state 就是最新的数据
  // action就是需求对象
  // "@@redux/INIT9.n.y.p.u.d"
  switch (action.type) {
    case 'INCREMENT':
      // return的值就是修改之后的值. return的值会覆盖原来store中state的值
      return {
        count: state.count + action.num,
      }
    case 'DECREMENT':
      // return的值就是修改之后的值
      return {
        count: state.count - action.num,
      }
    // 为了初始化数据,一定要记得加default这行代码
    default:
      return state
  }
}
// 2. 创建store
const store = createStore(reducer)

// console.log('初始化之后的数据', store.getState())
store.dispatch({ type: 'INCREMENT', num: 10 })
console.log('执行了一次递增之后的数据', store.getState())
store.dispatch({ type: 'INCREMENT', num: 10 })
console.log('执行了第二次递增之后的数据', store.getState())
store.dispatch({ type: 'DECREMENT', num: 5 })
console.log('执行了第三次递减之后的数据', store.getState())
