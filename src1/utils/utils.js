function sels(data){
    data=JSON.stringify(data)
    localStorage.setItem('test',data)
}
export {sels}