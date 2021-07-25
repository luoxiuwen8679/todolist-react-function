import React from 'react'
import PubSub, { publish } from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  const { todoList,removeAll } = props
  const count=todoList.filter(item=>item.isDone).length
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox"
        onChange={(e)=>PubSub.publish('updateAll',e.target.checked)}
        checked={count===todoList.length} />
      </label>
      <span>
        <span>已完成 {count}</span> / 全部 {todoList
          .length}     </span>
      <button className="btn btn-danger" onClick={removeAll}>清除已完成任务</button>
    </div>
  )
}
