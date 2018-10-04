import { fromJS } from 'immutable'
import * as constants from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: [],
  articPage: 1,
  showScroll: false
})

const changeHomeDate = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articList: fromJS(action.articList),
    recommendList: fromJS(action.recommendList)
  })
}
const addArticList = (state, action) => {
  const newArticList = state.get('articList').concat(action.list)
  const nextPage = action.nextPage
  return state.merge({
    'articList': newArticList,
    'articPage': nextPage
  })
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeDate(state, action)
    case constants.ADD_ARTICLE_LIST:
      return addArticList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
