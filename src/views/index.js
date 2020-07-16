import loadable from '@loadable/component'
// 路由懒加载模式
const Home = loadable( () => import('./home/Home'))
const Details = loadable( () => import('./home/Details'))
const TodoList = loadable( () => import('./todo/TodoList'))


export default [
  {
    id: 1,
    path: '/home',
    component: Home,
    text: '首  页',
    children: [
      {
        id: 101,
        path: '/details',
        component: Details,
        text: '详情'
      }
    ]
  },
  {
    id: 2,
    path: '/todolist',
    component: TodoList,
    text: 'todolist'
  }
]