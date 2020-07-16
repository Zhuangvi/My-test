import { getCnodeList } from '@/utils/api'
import { CNODE_LIST } from '../actionTypes'
export function changeMsg(payload){
  return {
    type: 1,
    payload
  }
}

// 使用redux-thunk 将一个异步的action转化成三个同步的action
// 第一个action 的作用是告诉reducer有一个异步行为触发了
// 第二个action 的作用是告诉reducer异步行为成功了
// 第三个action 的作用是告诉reducer异步行为失败了
export function cnode(params){ // 第一个action，异步行为触发了
  return function(dispatch){
    getCnodeList(params).then( res => {
      // 第二个action，这是成功的action
      dispatch({
        type: CNODE_LIST,
        payload: res
      })
    }).catch( err => {
      // 第三个action，这是失败的action
      dispatch({ 
        type: CNODE_LIST,
        payload: '失败了，'+ err
      })
    })
  }
}