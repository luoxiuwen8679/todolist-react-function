function setLS(data) {
    data = JSON.stringify(data)
    localStorage.setItem('todolist', data)
  }
  
  export { setLS }
  