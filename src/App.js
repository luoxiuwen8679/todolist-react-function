import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import { setLS } from './tools'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  const result = localStorage.getItem('todolist')
  const [todoList, setTodoList] = useState(
    result ? JSON.parse(result) : []
    //  [ { id: 1, todoName: '抽烟', isDone: true },
    //   { id: 2, todoName: '嫖娼', isDone: false }
    // ]
  )
  setLS(todoList)




  useEffect(() => {
    // 添加
    PubSub.subscribe('addTodo', (topic, todoName) => {
      // console.log(todoName);
      const newtodoList = [...todoList]
      let obj = {
        id: Date.now(),
        todoName,
        isDone: false
      }
      newtodoList.push(obj)
      setTodoList(newtodoList)
      // setLS(newtodoList)
    })
    // 修改
    PubSub.subscribe('update', (topic, id) => {
      console.log(id);
      const newtodoList = todoList.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
        return item
      })
      setTodoList(newtodoList)
      // setLS(newtodoList)
    })
    // 删除
    PubSub.subscribe('remove', (topic, id) => {
      // console.log(id);
      const newtodoList = todoList.filter(item => item.id !== id)
      setTodoList(newtodoList)
      // setLS(newtodoList)
    })
    //全部更新
    PubSub.subscribe('updateAll', (topic, data) => {
      console.log(data);
      const newtodoList = todoList.map(item => {
        item.isDone = data
        return item
      })
      setTodoList(newtodoList)
      // setLS(newtodoList)
    })
    return () => {
      PubSub.clearAllSubscriptions()
    }
  })
  // 删除全部
  function removeAll() {
    const newtodoList = todoList.filter(item => !item.isDone)
    setTodoList(newtodoList)
    // setLS(newtodoList)
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        {todoList.length ? <div>
          <List>
            {todoList.map(item => <Item item={item} key={item.id}></Item>)}
          </List>
          <Footer todoList={todoList} removeAll={removeAll}></Footer>
        </div> : <h1>全部完成</h1>}
      </div>
    </div>
  )
}
