import React from 'react'
import PubSub from 'pubsub-js'
import './Item.css'
export default function Item(props) {
  const { item } = props
  // console.log(item);
  return (
    <li>
      <label>
        <input type="checkbox" checked={item.isDone} onChange={(e) => { PubSub.publish('update', item.id)}} />
        <span className={item.isDone ? "active" : ""} >{item.todoName}</span>
      </label>
      <button className="btn btn-danger" onClick={() => { PubSub.publish('remove',item.id)}}>删除</button>
    </li>
  )
}
