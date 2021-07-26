import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// 引入根组件
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
