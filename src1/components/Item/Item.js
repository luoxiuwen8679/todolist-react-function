import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import context from '../../context'
import './Item.css'
export default class Item extends Component {
  // static contextType=context
  render() {
    const {item,updateTodo} = this.props
    console.log(updateTodo);
    return (
    //  <context.Consumer>
    //    {(data)=>{
    //      return  
    <li >
          <label>
            <input type="checkbox" checked={item.isDone} onChange={()=>{
             PubSub.publish('update',item.id)
            }}/>
            <span className={item.isDone?'active':''}>{item.todoName}</span>
          </label>
          <button className="btn btn-danger" onClick={()=>{PubSub.publish('delete',item.id)}}>删除</button>
        </li>
    //    }}
    //  </context.Consumer>
    )
  }
}
