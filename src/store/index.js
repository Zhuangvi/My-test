// 引入相应的api
import { createStore, combineReducers, applyMiddleware } from 'redux'
// 引入 子reducer
import testRreducer from './reducers/test'
import todoReducer from './reducers/todo'
import thunk from 'redux-thunk'

// 将子 reducer 合并成一个 reducer
let reducer = combineReducers({
  todo: todoReducer,
  test: testRreducer
})
// 创建一个 store
let store = createStore(reducer, applyMiddleware(thunk))
// 导出
export default store