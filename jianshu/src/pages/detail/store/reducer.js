import { fromJS } from 'immutable'
import * as constants from './actionTypes'

const defaultState = fromJS({
  title: '默认标题',
  content: '一段很长的文章内容'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL :
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
