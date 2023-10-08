import {legacy_createStore,combineReducers} from 'redux'

// 组合多个reducer
const reducer = combineReducers({

})

const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

