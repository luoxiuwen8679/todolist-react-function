import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
   const {list,updateAllTodo, clearAllDoneTodo}=this.props
   const count=list.filter(item=>item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={list.length===count} onChange={(e)=>{
            updateAllTodo(e)
          }}/>
        </label>
        <span>
          <span>已完成 {count}</span> / 全部 {list.length}
        </span>
        <button className="btn btn-danger" onClick={()=>{clearAllDoneTodo()}}>清除已完成任务</button>
      </div>
    )
  }
}
