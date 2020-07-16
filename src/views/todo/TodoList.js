import React from 'react'
import { connect } from 'react-redux'
import {addTodo, delTodo, updateTodo, clearTodo} from '@/store/actions/todo'
import './sytle.scss'

// 定义一个函数，将state中的数据赋给当前组件的props
function mapStateToProps(state){
  return {
    doinglist: state.todo.doingList,
    donelist: state.todo.doneList
  }
}
// 定义一个函数，将action中的函数赋给当前组件的props
function mapActionToProps(dispatch){
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    delTodo: (payload, listType) => dispatch(delTodo(payload, listType)),
    updateTodo: (payload, listType) => dispatch(updateTodo(payload, listType)),
    clearTodo: (payload) => dispatch(clearTodo(payload)),
  }

}
class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: ''
    }
  }
  inputChange(e){
    this.setState({
      task: e.target.value
    })
  }
  // 添加任务
  inputEnter(e){
    let { task } = this.state
    if(e.keyCode === 13){
      // console.log(13)
      // console.log(this.props)
      this.props.addTodo({id: Date.now(), task})
      this.setState({task: ''})
    }
  }
  // 删除当前任务
  delItem(index, listType){
    this.props.delTodo(index, listType)
  }
  // 更新任务列表
  updateTaskList(index, listType){
    this.props.updateTodo(index, listType)
  }
  // 清空任务
  clearList(listType){
    // console.log(arguments)
    this.props.clearTodo(listType)
  }
  createList(listType){
    let { doinglist, donelist } = this.props
    if(listType === 'doinglist'){
      return doinglist.map( (ele, index) => (
        <div key={ele.id} className='taskList'>
          <span onClick={this.updateTaskList.bind(this, index, 'doing')} className='btn'>切换任务状态</span>
          <span> </span>
          <span>{ele.id}</span>
          <span>===</span>
          <span>{ele.task}</span>
          <span>===</span>
          <span onClick={this.delItem.bind(this, index, 'doing')}>删除</span>
        </div>
      ))
    } else {
      return donelist.map( (ele, index) => (
        <div key={ele.id} className='taskList'>
          <span onClick={this.updateTaskList.bind(this, index, 'done')} className='btn'>切换任务状态</span>
          <span> </span>
          <span>{ele.id}</span>
          <span>===</span>
          <span>{ele.task}</span>
          <span>===</span>
          <span onClick={this.delItem.bind(this, index, 'done')}>删除</span>
        </div>
      ))
    }
  }
  render(){
    let { task } = this.state
    return (
      <div>
        <h1>TodoList</h1>
        <input 
          type="text"
          value={task}
          onChange={this.inputChange.bind(this)}
          onKeyUp={this.inputEnter.bind(this)}
        />
        <h2>正在进行</h2>
        <div className='doing'>
          {this.createList('doinglist')}
        </div>
        <div onClick={this.clearList.bind(this, 'doing')} className='btn'>清空正在进行列表</div>
        <h2>已经完成</h2>
        <div className='done'>
          {this.createList('donelist')}
        </div>
        <div onClick={this.clearList.bind(this, 'done')} className='btn'>清空已经完成列表</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoList)