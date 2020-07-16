import {
  TODO_ADD,
  TODO_DELETE,
  TODO_UPDATE,
  TODO_CLEAR
} from '../actionTypes'

// 定义初始值
let initState = {
  msg: 'hello redux',
  doingList: [],
  doneList: []
}

export default function reducer(state = initState, action){
  switch (action.type) {
    case TODO_ADD: // 添加
      let newState = JSON.parse(JSON.stringify(state))
      newState.doingList.push(action.payload)
      return newState
    case TODO_DELETE: // 删除
      let newState1 = JSON.parse(JSON.stringify(state))
      if(action.listType === 'doing'){
        newState1.doingList.map((ele, index, arr) => {
          arr.splice(index)
          return false
        })
      } else {
        newState1.doneList.map((ele, index, arr) => {
          arr.splice(index)
          return false
        })
      }
      return newState1
    case TODO_UPDATE: // 更新任务
      let newState2 = JSON.parse(JSON.stringify(state))
      if(action.listType === 'doing'){
        newState2.doingList.map((ele, index, arr) => {
          arr.splice(index, 1)
          newState2.doneList.push(ele)
          return false
        })
      } else {
        newState2.doneList.map((ele, index, arr) => {
          arr.splice(index, 1)
          newState2.doingList.push(ele)
          return false
        })
      }
      return newState2
    case TODO_CLEAR: // 清空任务列表
      let newState3 = JSON.parse(JSON.stringify(state))
      // console.log(action.listType)
      if(action.listType === 'doing'){
        newState3.doingList = []
      } else {
        newState3.doneList = []
      }
      return newState3
    default:
      return state
  }
}