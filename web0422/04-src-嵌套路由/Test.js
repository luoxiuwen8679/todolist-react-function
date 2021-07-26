import React from 'react'
import { withRouter } from 'react-router-dom'

const WithTest = withRouter(Test)
function Test(props) {
  console.log(props)
  return (
    <div
      onClick={() => {
        props.history.push('/home')
      }}
    >
      test组件
    </div>
  )
}
export default WithTest
