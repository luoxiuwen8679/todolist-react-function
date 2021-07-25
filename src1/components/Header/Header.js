import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: ''
  }
  handle = (e) => {
    // console.log(e);
    // let newtodoName = e.target.value.trim()
    this.setState({
      todoName: e.target.value.trim()
    })
  }

  keyUpHandle = (e) => {
    const { addTodo } = this.props
    if (e.keyCode === 13) {
      let newtodoName = this.state.todoName.trim()
      if (!newtodoName) return
      addTodo(newtodoName)
      e.target.value = ''
      console.log(e.target.value);
      this.setState({
        todoName: ''
      })
    } 
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" value={this.state.todoName} onChange={this.handle} onKeyUp={this.keyUpHandle} />
      </div>
    )
  }
}
