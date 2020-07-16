import {
  TODO_ADD,
  TODO_DELETE,
  TODO_UPDATE,
  TODO_CLEAR
} from '../actionTypes'
// 增
export function addTodo(payload){
  return {
    type: TODO_ADD,
    payload
  }
}
// 删
export function delTodo(payload, listType){
  return {
    type: TODO_DELETE,
    payload,
    listType
  }
}
// 改
export function updateTodo(payload, listType){
  return {
    type: TODO_UPDATE,
    payload,
    listType
  }
}
// 清空
export function clearTodo(listType){
  return {
    type: TODO_CLEAR,
    listType
  }
}