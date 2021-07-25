import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
// import context from './context'
import {sels} from './utils/utils'
import './App.css'
export default class App extends Component {
  constructor(){
    super()
    const result=localStorage.getItem('test')
    this.state={
      todoList:result?JSON.parse(result):[]
    }
    // if(result){
    //   this.state={
    //     todoList:c
    //   }
    // }
    // else{
    //   this.state=[]
    // }
  // state = {
  //   todoList: [
  //     {
  //       id: 1,
  //       todoName: '吃饭',
  //       isDone: false,
  //     },
  //     {
  //       id: 2,
  //       todoName: '睡觉',
  //       isDone: true,
  //     },
  //   ],
  // }
}

  addTodo=(data)=>{
    console.log(data);
    let newtodoList =[...this.state.todoList]
    let obj={
      id:Date.now(),
      todoName: data,
      isDone: false
    }
    newtodoList.push(obj)
    this.setState({
      todoList: newtodoList
    })
    // sels(newtodoList)
  }
  // updateTodo=(data)=>{
  //   const  {todoList}=this.state
  //   let newtodolist=todoList.map((item)=>{
  //     if(item.id===data){
  //       item.isDone =!item.isDone
  //     }
  //     return item
  //   })
  //   this.setState({
  //     todoList: newtodolist
  //   })
  //   // sels(newtodolist)
  // }
  // removeTodo=(data)=>{
  //   console.log(data);
  //   const  {todoList}=this.state

  //   let newtodolist=todoList.filter(item=>{
  //     return item.id!==data
  //   })
  //   this.setState({
  //     todoList: newtodolist
  //   })
  //   // sels(newtodolist)
  // }
  updateAllTodo=(e)=>{
  //  console.log( e.target.checked);

    const {todoList}=this.state
  //    const news=todoList.map(item=>{
  //     item.isDone=e.target.checked
  //     return item
  //   })
    const result=todoList.every(item=>item.isDone)
    console.log(result);
    let news = todoList.map(item=>{
       item.isDone = !result
       return item
    })
    this.setState({
      todoList: news
    })
    // sels(news)
  }
  clearAllDoneTodo=()=>{
    const {todoList}=this.state
    let news=todoList.filter((item)=>!item.isDone)
    this.setState({
      todoList: news
    })
    // sels(news)
  }
  render() {
    
   const {todoList}=this.state
    return (
      // <context.Provider value={this.removeTodo}>
        <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          {todoList.length?<div>
            <List list={todoList} updateTodo={this.updateTodo}  clearAllDoneTodo={this.clearAllDoneTodo}></List>
            <Footer list={todoList} updateAllTodo={this.updateAllTodo} clearAllDoneTodo={this.clearAllDoneTodo}></Footer>
          </div>:<h1>无评论</h1>}
          
        </div>
      </div>
      //  </context.Provider>
    )
  }
  componentDidMount(){
    this.updatetoken=PubSub.subscribe('update',(msg,id)=>{
      const {todoList}=this.state
      const newtodolist=[...todoList]
      newtodolist.forEach((item)=>{
        if(item.id===id){
          item.isDone = !item.isDone
        }
      })
      this.setState({
        todoList: newtodolist
      })
    })
    this.deleteTodotoken=PubSub.subscribe('delete',(msg,id)=>{
      const {todoList}=this.state
      let newtodolist=[...todoList]
      newtodolist =newtodolist.filter((item)=>item.id!==id)
      this.setState({
        todoList:newtodolist
      })
    })
  }
  componentDidUpdate(){
    sels(this.state.todoList)
  }
}

