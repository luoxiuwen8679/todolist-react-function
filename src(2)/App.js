import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Position render={(state) => <Mouse {...state}></Mouse>}></Position> */}
        <Position>{(state) => <Mouse {...state}></Mouse>}</Position>
        <Position>{(state) => <Cat {...state}></Cat>}</Position>
      </div>
    )
  }
}
