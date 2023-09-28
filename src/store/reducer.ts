const defaultStore = {
    test:'996'
}
let reducer = (state=defaultStore)=>{
    // 拷贝
    let newState = JSON.parse(JSON.stringify(state))
    return newState
}

export default reducer