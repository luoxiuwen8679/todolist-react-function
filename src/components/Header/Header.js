import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js' 
import './Header.css'
export default function Header() {
  const [todoName, settodoName] = useState("")
  function keyUp(e){
    if(e.keyCode ===13){
      if(!todoName) return 
      PubSub.publish('addTodo',todoName)
      settodoName("")
    }
  }
  return (
    <div className="todo-header">
      <input type="text" value={todoName} 
      onChange={(e) => { settodoName(e.target.value.trim())}} 
      onKeyUp={keyUp}/>
    </div>
  )
}
