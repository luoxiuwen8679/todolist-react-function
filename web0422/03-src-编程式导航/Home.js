import React from 'react'

export default function Home(props) {
  // console.log(props)
  return (
    <div>
      首页
      <button
        onClick={() => {
          // 可以切换视图
          // 第一个参数: 要修改的路径的目标值
          // 第二个参数: 要传递的数据
          props.history.push('/detail/1', { name: 'zs' }) // 添加一条历史记录
          // props.history.replace('/detail', { name: 'zs' }) //替换一条历史记录
        }}
      >
        按钮
      </button>
    </div>
  )
}
