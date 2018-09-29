import * as constans from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [] //list也是一个immutable数组
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constans.SEARCH_FOCUS :
    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
      return state.set('focused', true) 
    case constans.SEARCH_BLUR :
      return state.set('focused', false)
    case constans.CHANGE_LIST :
      return state.set('list', action.data)
    default:
      return state
  }
}
