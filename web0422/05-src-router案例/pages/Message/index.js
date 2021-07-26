import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Detail'

export default function (props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li>
          <Link to="/home/message/1">message001</Link>
        </li>
        <li>
          <Link to="/home/message/2">message002</Link>
        </li>
        <li>
          <Link to="/home/message/3">message003</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          props.history.push('/home/message/4', { from: '/home/message' })
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          props.history.replace('/home/message/5', { from: '/home/message' })
        }}
      >
        替换
      </button>
      <Route path="/home/message/:id" component={Detail}></Route>
    </div>
  )
}
