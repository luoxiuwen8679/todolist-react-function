import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list,updateTodo} = this.props
    // console.log(list);
    return (
      <ul className="todo-main">
      {list.map((item)=>{
      return <Item key={item.id} item={item} updateTodo={updateTodo} ></Item>
      })
    }</ul>
    )
  }
}
