let reducer = (state = {test: '996',}) => {
    // 拷贝
    let newState = JSON.parse(JSON.stringify(state))
    // switch可以用策略模式 || for in 遍历对比
    return newState
}

export default reducer
