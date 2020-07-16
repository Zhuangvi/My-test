import React from 'react';
import '@/assets/style/common.scss'
import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import { MySider } from '@/components'
import routes from '@/views/'
import { Provider } from 'react-redux'
import store from '@/store/'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }
  
  createNav(){
    return routes.map( ele => (
      <div key={ele.id}>
        <NavLink to={ele.path}>
          {ele.text}
        </NavLink>  
      </div>
    ))
  }
  createCon(){
    let arr = []
    routes.map( ele => {
      arr.push(
        <Route 
          key={ele.id}
          path={ele.path}
          component={ele.component}
        >
        </Route>
      )
      if(ele.children){
        ele.children.map( ele => {
          arr.push(
            <Route
              key={ele.id}
              path={ele.path}
              component={ele.component}
            ></Route>
          )
          return false
        })
      }
      return false
    })
    return arr
  }
  render(){
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <div>
              <MySider></MySider>
            </div>
            <div>
              {this.createNav()}
            </div>
            <div>
              <Switch>
                {this.createCon()}
                <Redirect from='/*' to='/home'></Redirect>
              </Switch>
            </div>
          </div>
          
        </Provider>
      </HashRouter>
    )
  }
}