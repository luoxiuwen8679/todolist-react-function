import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, todoName: '吃饭', isDone: false },
    { id: 2, todoName: '敲代码', isDone: true },
  ])

  useEffect(() => {
    // 添加任务
    PubSub.subscribe('todoName', (topic, todoName) => {
      // console.log(todoName)

      let todoObj = {
        todoName,
        id: Date.now(),
        isDone: false,
      }

      const newtodoList = [...todoList]
      console.log(newtodoList)
      newtodoList.push(todoObj)
      setTodoList(newtodoList)
    })
    // 修改任务
    PubSub.subscribe('update', (topic, id) => {
      const newtodoList = [...todoList]
      newtodoList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
      setTodoList(newtodoList)
    })
    // 删除任务
    PubSub.subscribe('delete', (topic, id) => {
      const newtodoList = todoList.filter((item) => item.id !== id)
      setTodoList(newtodoList)
    })
    return () => {
      PubSub.clearAllSubscriptions()
    }
  })

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>
            {todoList.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
