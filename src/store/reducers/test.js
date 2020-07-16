import { CNODE_LIST } from '../actionTypes'

let initState = {
  msg: 'hello redux',
  list: [],
  cnodeList: []
}

// reducer 是 redux的三大概念之一，它是一个纯函数，用来改变数据的纯函数
// 这个纯函数有两个参数，参数1：被共享的数据，参数2：用来改变数据的action
export default function reducer(state=initState, action){
  switch (action.type) {
    case 1:
      console.log('它带着action来了', action)
      // 将state进行深复制
      let newState = JSON.parse(JSON.stringify(state))
      newState.msg = action.payload
      return newState  
    case CNODE_LIST:

      return {...state, ...{cnodeList: action.payload}}
    default:
      return state
  }
}