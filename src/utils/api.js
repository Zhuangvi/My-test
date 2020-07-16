import fetch from './fetch'

export function getCnodeList(params){
  return fetch({
    url: '/topics',
    method: 'GET',
    params
  })
}