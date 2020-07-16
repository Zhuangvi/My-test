import React from 'react'

import { connect } from 'react-redux'
import { changeMsg, cnode } from '@/store/actions/test'

// 定义函数，将state中的数据变成当前组件的props
function mapStateToProps(state){
  return {
    msg: state.test.msg,
    cnodeList: state.test.cnodeList
  }
}
// 定义函数，将actions中的方法也赋给当前组件的props
function mapActionToProps(dispatch){
  return {
    xxx: function(payload){
      return dispatch(changeMsg(payload))
    },
    getCnodeList: (params) => dispatch(cnode(params)) // 这里是发送第一个aciton，也就是告诉reducer有一个异步行为触发了
  }
}

class Home extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  click(){
    this.props.xxx('hello 12345')
  }
  componentDidMount(){ // 在redux可直接在componentDidMount生命周期中请求接口，且不和mobx一样，这里只会请求一次
    let params = {
      page: 1,
      limit: 5,
      tab: ''
    }
    this.props.getCnodeList(params)
  }
  createCnodeList(){
    return this.props.cnodeList.map( ele => (
      <div key={ele.id}>{ele.title}</div>
    ))
  }
  render(){
    return (
      <div>
        <h2>首页</h2>
        <h1>{this.props.msg}</h1>
        <button onClick={this.click.bind(this)}>修改msg</button>
        <hr/>
        <div>
          {this.createCnodeList()}
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapActionToProps)(Home)