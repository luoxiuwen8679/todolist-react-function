import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {
  const [todoName, setTodoName] = useState('')
  function sendTodoName(e) {
    if (e.keyCode === 13) {
      if (!todoName) return
      PubSub.publish('todoName', todoName)
      setTodoName('')
    }
  }
  return (
    <div className="todo-header">
      <input
        type="text"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value.trim())
        }}
        onKeyUp={sendTodoName}
      />
    </div>
  )
}
